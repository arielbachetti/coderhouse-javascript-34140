// Clase DateTime
const DateTime = luxon.DateTime

// Del año al milisegundo en los parametros.
console.log(DateTime.local(2022, 1, 25, 12, 10));
/// Fecha actual.
console.log(DateTime.now());
// to String
console.log(DateTime.now().toLocaleString());

// fromObject
// Dos params:
// - El primero donde definimos numéricamente la fecha y hora.
// - El segundo donde aclaramos la zona horaria y el tipo de numeración.
const dtFromObject = DateTime.fromObject(
  { day: 22, hour: 12, month: 2 },
  { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
)

console.log(dtFromObject.toLocaleString());

const dt = DateTime.now();

// fromIso
DateTime.fromISO('2017-05-15');
DateTime.fromISO('2017-05-15T08:30:00');

// Algunas propiedades utiles
dt.year;
dt.month;
dt.day;
dt.second;
dt.weekday;

console.log(dt.zoneName);
console.log(dt.daysInMonth);

// toSting y toLocaleString
console.log(dt.toLocaleString(DateTime.DATE_FULL));
console.log(dt.toLocaleString(DateTime.DATE_HUGE));

// plus y minus
const suma = dt.plus({ hours: 5, minutes: 15 });
const resta = dt.minus({ hours: 5, minutes: 15 });

console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

// set
const ejemploSet = dt.set({ hour: 3 });
console.log(ejemploSet.toLocaleString(DateTime.DATETIME_SHORT));

// Clase Duration
const Duration = luxon.Duration

const duration = Duration.fromObject({ hours: 3, minutes: 15 });
const ejemploSumaDuration = dt.plus(duration);

console.log(ejemploSumaDuration.toLocaleString(DateTime.DATETIME_SHORT));

// Clase Interval
const Interval = luxon.Interval;

const now = DateTime.now();
const later = DateTime.local(2022, 12, 25);
const i = Interval.fromDateTimes(now, later);

console.log(i.length('days'));
console.log(i.length('hours'));
console.log(i.length('minutes'));
