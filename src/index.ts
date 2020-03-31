import axios, { AxiosInstance } from 'axios';
import { AppointmentApi } from './appointment/api';
import { ClientApi } from './client/api';
import { NotesApi } from './notes/api';

export class IntakeQApi {
  protected api: AxiosInstance;

  public Appointment: AppointmentApi;

  public Client: ClientApi;

  public Notes: NotesApi;

  constructor(apiKey: string) {
    this.api = axios.create({
      baseURL: 'https://intakeq.com/api/v1',
      timeout: 5000,
      headers: { 'X-Auth-Key': apiKey },
    });

    this.Client = new ClientApi(this.api);
    this.Appointment = new AppointmentApi(this.api);
    this.Notes = new NotesApi(this.api);
  }
}

export * from './appointment/interfaces';
export * from './client/interfaces';
export * from './notes/interfaces';

export default IntakeQApi;