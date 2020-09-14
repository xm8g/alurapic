import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoListService implements Resolve<Observable<Photo[]>> {

  constructor(private photoService: PhotoService) { }

  // tslint:disable-next-line: max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
    const userName = route.params.userName;

    return this.photoService.listFromUserPag(userName, 1);
  }
}
