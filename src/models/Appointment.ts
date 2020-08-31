import { v4 } from 'uuid';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface AppointmentConstructor {
  provider: string;
  date: Date;
}

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = v4();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
