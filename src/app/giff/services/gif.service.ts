import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Giff, SearchResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public tagHistory: string[] = [];
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'CSfXYTlY5jUFqVkQyNRUL9w8l3KAWMmJ';
  private http = inject(HttpClient);
  public gifList: Giff[] = [];
  constructor() {
    this.loadLocalStorage();
  }

  getTagHistory(): string[] {
    return [...this.tagHistory]; //Para realizar una copia ya
    //todas la variabls pasan por referencia y evitar mutaciones
  }

  private saveLocalStorage() {
    if (this.tagHistory.length > 0) {
      localStorage.setItem('history', JSON.stringify(this.tagHistory));
    }
  }
  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;

    this.tagHistory = JSON.parse(localStorage.getItem('history')!);
    if (this.tagHistory.length === 0) return;
    this.searchTag(this.tagHistory[0]);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this.tagHistory.includes(tag))
      this.tagHistory = this.tagHistory.filter((oldTags) => oldTags !== tag);

    if (this.tagHistory.length > 9) {
      this.tagHistory.splice(this.tagHistory.length - 1, 1);
    }
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    this.tagHistory.unshift(tag);

    this.saveLocalStorage();

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.apiUrl}/search?${params}`)
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }
}
