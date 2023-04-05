import React from 'react';

import * as C from './style';

export default function Footer() {
    return(
        <C.Container>
            <h5>
                Coded by <a href='https://www.linkedin.com/in/arruda-rafael/' target='_blank'>Rafael</a>
            </h5>
            <span>
                Dados da API <a href='https://www.themoviedb.org/?language=pt-BR' target='_blank'>Tmdb</a>
            </span>
        </C.Container>
    )
}