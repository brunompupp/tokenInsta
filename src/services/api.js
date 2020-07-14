import React from 'react';
import axios from 'axios';

export const apiAuth = axios.create({
  baseURL:'https://www.instagram.com/oauth/'
})

export const apiToken = axios.create({
  baseURL:'https://graph.instagram.com/access_token',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
