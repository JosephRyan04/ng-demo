import { Injectable } from '@angular/core';
import { testdata } from '../testdata';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  getJobs(): import("../testdata").Job[] {
    throw new Error('Method not implemented.');
  }
  // TODO: Implement API fetching logic here
  constructor() { }

  getTopJobs(count: number) {
    return testdata.slice(0, count);
  }
}
