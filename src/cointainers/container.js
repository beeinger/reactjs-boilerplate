import React from 'react';
import { Container } from 'unstated'
import Cookies from 'universal-cookie';

class SomeContainer extends Container {
    state = {}

    cookies = new Cookies()

}
export const someContainer = new SomeContainer()