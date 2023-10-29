import { Injectable } from '@angular/core';

@Injectable()
export class BusinessIdService {
  private businessId: number = 1; // Default value

  setBusinessId(id: number) {
    this.businessId = id;
  }

  getBusinessId(): number {
    return this.businessId;
  }
}
