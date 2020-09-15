import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';
import { catchError, map } from 'rxjs/operators';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${API}/${userName}/photos`);
  }

  listFromUserPag(userName: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photo[]>(`${API}/${userName}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${API}/photos/upload`, formData);
  }

  findById(photoId: number) {

    return this.http.get<Photo>(`${API}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(`${API}/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string) {

    return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API}/photos/${photoId}`);
  }

  like(photoId: number) {

    /*Por padrão o Angular vai retornar apenas o body da requisição, ao informar o observe: 'response', estamos dizendo para ele que 
     também queremos as informações do cabeçalho(headers) e códigos de resposta(http status code).*/
    return this.http.post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
      /* Aqui caso o código da resposta seja 304 será retornado um novo Observable (of) com o valor false,
      se não, também será retornado um Observable, porém, o mesmo vai disparar a função de erro.*/
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status === '304' ? of(false) : throwError(err);
      }));
  }
}
