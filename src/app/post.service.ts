import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  public API = 'https://jsonplaceholder.typicode.com';
  public POST_API = this.API + '/posts';

  constructor(private http: HttpClient) { }

  fetch(): Observable<any> {
    return this.http.get(this.POST_API);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.POST_API + '/' + id);
  }

  add(post: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.POST_API, post);
    return result;
  }

  remove(id: number): Observable<any> {
    let result: Observable<Object>;
    result = this.http.delete(this.POST_API + '/' + id);
    return result;
  }

  edit(post: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.put(this.POST_API + '/' + post.id, post);
    return result;
  }
}
