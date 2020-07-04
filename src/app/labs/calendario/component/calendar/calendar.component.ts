import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import compareAsc from 'date-fns/compareAsc'
import { NAMES_MONTH } from '../../data';
import { SelectMonthPage } from '../../modals/select-month/select-month.page';
import { SelectYearPage } from '../../modals/select-year/select-year.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @Input() multipleDates = false;
  @Input() onlyFuture = false;
  @Input() onlyPast = false;
  @Input() readonly = false;
  @Input() datePopulate: any;
  @Input() rangeDatePopulate: any;

  @Output() emitDate = new EventEmitter();

  // Representa a data do calendario atual - muda quando avança ou volta o mes
  date = new Date();

  // Data para comparação com hoje - sem mudanças
  today = new Date();

  // Dias do mes corrente
  daysInThisMonth: any;

  // Dias do ultimo mes
  daysInLastMonth: any;

  // Dias do proximo mes
  daysInNextMonth: any;

  // Mes atual do calendario
  currentMonth: any;

  // Ano atual do calendario
  currentYear: any;

  // Dia atual do calendario
  currentDate: any;

  // Nomes abreviados dos meses
  monthNames = NAMES_MONTH;

  // Data final selecionada
  dateSelected: any;

  // Range de datas finais selecionada
  rangeDateSelected: any = {
    dateStart: null,
    dateEnd: null,
  };

  // Controle local do range de datas
  rangeDates: any;
  rangeDatesComplete: any;

  /**
   * Tamanho da grid do calendario
   */
  gridCalendar: any;
  heightDate: any;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    // Se tiver data populada, ir para o mes e ano deste valor
    if (this.datePopulate || this.rangeDatePopulate) {
      if (this.datePopulate) {
        let dateString = this.datePopulate.substring(0,10).split('-');
        this.goToSelectedMonth(dateString[1], dateString[0]);
      }
      if (this.rangeDatePopulate) {
        let dateString = this.rangeDatePopulate.dateStart.substring(0,10).split('-');
        this.goToSelectedMonth(dateString[1], dateString[0]);
      }
    } else {
      // Se não tiver data populada, abrir o calendário no mes corrente
      this.getDaysOfMonth();
    }

    setTimeout(() => {
      this.gridCalendar = document.getElementById('calendar-dates');
      this.heightDate = this.gridCalendar.offsetWidth / 7;
    });
  }

  /**
   * Ir para o mes anterior
   */
  goToSelectedMonth(month: any, year: any) {
    this.date = new Date(year, month, 0);
    this.getDaysOfMonth();
  }

  /**
   * Ir para o mes anterior
   */
  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  /**
   * Ir para o proximo mes
   */
  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  /**
   * Selecionar mes no cabeçalho
   */
  async selectMonth() {
    const modal = await this.modalController.create({
      component: SelectMonthPage,
      cssClass: 'modal-calendar'
    });

    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.goToSelectedMonth(data.index + 1, this.date.getFullYear());
    }
  }

  /**
   * Selecionar ano no cabeçalho
   */
  async selectYear() {
    const modal = await this.modalController.create({
      component: SelectYearPage,
      cssClass: 'modal-calendar',
      componentProps: { currentYear: this.date.getFullYear() }
    });

    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.goToSelectedMonth(this.date.getMonth() + 1, data);
    }
  }

  /**
   * Calcular dias e popular eventos
   */
  getDaysOfMonth() {
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.daysInThisMonth = new Array();

    // Pega o nome do mes atual do calendario
    this.currentMonth = this.monthNames[this.date.getMonth()];

    // Pega o nome do ano atual do calendario
    this.currentYear = this.date.getFullYear();

    // Se o dia atual do calendar for no mesmo mes corrente geral, o current date será marcado como hoje
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    // Obter o primeiro dia do mes atual do calendario
    const firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();

    // Popular os dias do mes anterior
    const prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for (let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }
  
    // Popular os dias do mes corrente
    let thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {

      let day = {
        day: i + 1,
        selected: false,
        startDate: false,
        endDate: false,
        disabled: false
      };

      // Se aceitar apenas datas futuras, mudar layout para disable das datas passadas
      if (this.onlyFuture) {
        let treatDay = ((i + 1) < 10) ? '0' + (i + 1) : (i + 1);
        let treatMonth = this.currentMonth.index + 1;
        treatMonth = (treatMonth < 10) ? '0' + treatMonth : treatMonth;

        const dateString = this.currentYear + '-' + treatMonth + '-' + treatDay + 'T12:00:00';

        const result = compareAsc(new Date(dateString), new Date().setHours(12, 0, 0, 0));

        if (result === -1) {
          this.today.setHours(12, 0, 0, 0);
          let todayString = this.today.toISOString().substr(0, 10);

          let currentDayString = new Date(dateString).toISOString().substr(0, 10);

          if (todayString !== currentDayString) {
            day.disabled = true;
          }
        }
      }

      // Se aceitar apenas datas passadas, mudar layout para disable das datas futuras
      if (this.onlyPast) {
        let treatDay = ((i + 1) < 10) ? '0' + (i + 1) : (i + 1);
        let treatMonth = this.currentMonth.index + 1;
        treatMonth = (treatMonth < 10) ? '0' + treatMonth : treatMonth;

        const dateString = this.currentYear + '-' + treatMonth + '-' + treatDay + 'T12:00:00';

        const result = compareAsc(new Date(dateString), new Date().setHours(12, 0, 0, 0));

        if (result === 1) {
          day.disabled = true;
        }
      }

      // Se tiver range de datas para popular, preencher o form
      if (this.rangeDatePopulate) {
        // Data do dia para poder fazer comparacao
        const dateLoop = new Date(this.date.getFullYear(), this.date.getMonth(), (i + 1));
        const dti = new Date(this.rangeDatePopulate.dateStart.replace(/-/g, '\/').replace(/T.+/, ''));
        const dtf = new Date(this.rangeDatePopulate.dateEnd.replace(/-/g, '\/').replace(/T.+/, ''));

        // Mapear os dias entre inicio e fim do range para marcar no calendario
        if (dateLoop >= dti && dateLoop <= dtf) {
          day.selected = true;

          if (dateLoop.toString() === dti.toString()) {
            day.startDate = true;
          }

          if (dateLoop.toString() === dtf.toString()) {
            day.endDate = true;
          }
        }
      }

      // Se tiver uma data para popular, preencher no calendario
      if (this.datePopulate) {
        const dateLoop = new Date(this.date.getFullYear(), this.date.getMonth(), (i + 1));
        const dt = new Date(this.datePopulate.replace(/-/g, '\/').replace(/T.+/, ''));
        if (dateLoop.toString() === dt.toString()) {
          day.startDate = true;
          day.endDate = true;
          day.selected = true;
        }
      }

      this.daysInThisMonth.push(day);
    }

    // Popular os dias do proximo mes
    let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    for (let i = 0; i < (6 - lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i + 1);
    }

    // Calibrar dias do proximo mes
    let totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if (totalDays < 36) {
      for(let i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
        this.daysInNextMonth.push(i);
      }
    }

    // Caso tenha range de datas escolhidas, sempre atualizar quando virar o mes
    if (this.multipleDates && this.completeRange) {
      this.completeRange(this.rangeDateSelected.dateStart, this.rangeDateSelected.dateEnd);
    }
  }

  /**
   * Selecionar dia
   *
   * @param day
   */
  changeDay(day: any) {
    // Se for somente leitura, travar clique
    if (this.readonly) {
      return;
    }

    // Se aceitar apenas datas futuras, travar o clique para o passado
    if (this.onlyFuture) {
      let treatDay = (day.day < 10) ? '0' + day.day : day.day;
      let treatMonth = this.currentMonth.index + 1;
      treatMonth = (treatMonth < 10) ? '0' + treatMonth : treatMonth;

      const dateString = this.currentYear + '-' + treatMonth + '-' + treatDay + 'T12:00:00';

      const result = compareAsc(new Date(dateString), new Date().setHours(12, 0, 0, 0));

      if (result === -1) {
        return;
      }
    }

    // Se aceitar apenas datas passadas, travar o clique
    if (this.onlyPast) {
      let treatDay = (day.day < 10) ? '0' + day.day : day.day;
      let treatMonth = this.currentMonth.index + 1;
      treatMonth = (treatMonth < 10) ? '0' + treatMonth : treatMonth;

      const dateString = this.currentYear + '-' + treatMonth + '-' + treatDay + 'T12:00:00';

      const result = compareAsc(new Date(dateString), new Date().setHours(12, 0, 0, 0));

      if (result === 1) {
        return;
      }
    }

    if (this.multipleDates) {
      this.treatRangeDates(day, this.currentMonth, this.currentYear);
    } else {
      this.treatOneDay(day, this.currentMonth, this.currentYear);
    }
  }

  /**
   * Escolhendo apenas um dia
   *
   * @param day
   * @param month
   * @param year
   */
  treatOneDay(day: any, month: any, year: any) {
    this.daysInThisMonth.forEach((item: any) => {
      item.selected = false;
    });

    day.selected = true;

    let treatDay = (day.day < 10) ? '0' + day.day : day.day;
    let treatMonth = month.index + 1;
    treatMonth = (treatMonth < 10) ? '0' + treatMonth : treatMonth;

    const dateString = year + '-' + treatMonth + '-' + treatDay;
    this.dateSelected = new Date(dateString).toISOString();

    // Emitir valor
    this.emitDate.emit(this.dateSelected);
  }

  /**
   * Escolhendo range de datas
   * 
   * @param day
   * @param month
   * @param year
   */
  treatRangeDates(day: any, month: any, year: any) {
    // Se as datas estiveraem preenchidas, zerar
    if (this.rangeDatesComplete) {
      this.rangeDateSelected.dateStart = null;
      this.rangeDateSelected.dateEnd = null;
      this.daysInThisMonth.forEach((item: any) => {
        item.selected = false;
        item.dateStart = null;
        item.dateEnd = null;
      });
      this.rangeDatesComplete = false;
    }

    // Popular data de inicio
    if (!this.rangeDateSelected.dateStart) {
      let treatDay = (day.day < 10) ? '0' + day.day : day.day;
      let treatMonth = month.index + 1;
      treatMonth = (treatMonth < 10) ? '0' + treatMonth : treatMonth;

      const dateString = year + '-' + treatMonth + '-' + treatDay;
      this.rangeDateSelected.dateStart = new Date(dateString).toISOString();
      day.selected = true;
      return;
    }

    // Se a data final for menor que a data inicio, zerar
    let treatDay = (day.day < 10) ? '0' + day.day : day.day;
    let treatMonth = month.index + 1;
    treatMonth = (treatMonth < 10) ? '0' + treatMonth : treatMonth;

    const dateEndString = year + '-' + treatMonth + '-' + treatDay;
    const result = compareAsc(new Date(dateEndString), new Date(this.rangeDateSelected.dateStart));

    if (result === -1) {
      this.rangeDateSelected.dateStart = new Date(dateEndString).toISOString();
      this.rangeDateSelected.dateEnd = null;
      this.daysInThisMonth.forEach((item: any) => {
        item.selected = false;
        item.dateStart = null;
        item.dateEnd = null;
      });
      this.rangeDatesComplete = false;
      day.selected = true;
      return;
    }

    // Popular data de fim
    if (!this.rangeDateSelected.dateEnd) {
      this.rangeDateSelected.dateEnd = new Date(dateEndString).toISOString();
      day.selected = true;
      this.rangeDatesComplete = true;

      this.completeRange(this.rangeDateSelected.dateStart, this.rangeDateSelected.dateEnd);

      // Emitir valor
      this.emitDate.emit(this.rangeDateSelected);
    }
  }

  /**
   * Completar os dias entre data inicio e fim
   *
   * @param dateStart
   * @param dateEnd
   */
  completeRange(dateStart: any, dateEnd: any) {
    // Tratando as datas do evento para poder fazer comparacao
    const dti = new Date(dateStart);
    const dtf = new Date(dateEnd);

    // Loop nos dias do mes
    this.daysInThisMonth.forEach((d: any) => {
      // Tratando a data do dia para poder fazer comparacao
      const dateLoop = new Date(this.date.getFullYear(), this.date.getMonth(), d.day);

      // Mapear os dias entre inicio e fim do evento
      if (dateLoop >= dti && dateLoop <= dtf) {
        d.selected = true;

        if (dateLoop.toString() === dti.toString()) {
          d.startDate = true;
        }

        if (dateLoop.toString() === dtf.toString()) {
          d.endDate = true;
        }
      }
    });
  }
}
