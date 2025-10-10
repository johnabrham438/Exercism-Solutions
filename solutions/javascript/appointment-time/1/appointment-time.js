// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = new Date()) {
  const date = new Date(now);
  date.setDate(date.getDate() + days);
  return date;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();;
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
 const appointment = new Date(timestamp);
  return {year: appointment.getFullYear(), month: appointment.getMonth(), date: appointment.getDate(), hour: appointment.getHours(), minute: appointment.getMinutes()}
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const appointment = new Date(timestamp);
  
  if (options.year !== undefined) appointment.setFullYear(options.year);
  if (options.month !== undefined) appointment.setMonth(options.month);
  if (options.date !== undefined) appointment.setDate(options.date);
  if (options.hour !== undefined) appointment.setHours(options.hour);
  if (options.minute !== undefined) appointment.setMinutes(options.minute);
  
  return getAppointmentDetails(appointment);
  
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);

  const diffMs = dateA - dateB;

  const diffSeconds = Math.abs(Math.floor(diffMs / 1000));

  return diffSeconds;
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  if (appointmentTimestamp > currentTimestamp) {
    return true;
  } else {
    return false;
    
  }
}
