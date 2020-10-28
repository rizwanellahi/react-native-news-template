import {key} from './key';

export const headlines = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${key}`;
export const sports = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${key}`;
export const tech = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${key}`;
export const business = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;
export const bitcoinAPI = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}`;

export const entertainmentAPI = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${key}`;
export const generalAPI = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${key}`;
export const healthAPI = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${key}`;
export const techCrunchAPI = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${key}`;
