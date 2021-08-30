'use strict';

const searchButton = document.querySelector('button');
const searchCity = document.querySelector('#city');

const loadingText = document.querySelector('#load');
const weatherContainer = document.querySelector('#weather');

const weatherCity = weatherContainer.firstElementChild;
const weatherDescription = document.querySelector('#weatherDescription');
const weatherTemperature = weatherContainer.lastElementChild;