import * as all from '@material-ui/styles';

declare module '@material-ui/styles' {
    export type Theme = import('./theme').Theme;
}
