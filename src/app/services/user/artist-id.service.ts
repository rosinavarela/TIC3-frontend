import { Injectable } from '@angular/core';

@Injectable()
export class ArtistIdService {
  private artistId: number = 1; // Default value

  setArtistId(id: number) {
    this.artistId = id;
  }

  getArtistId(): number {
    return this.artistId;
  }
}
