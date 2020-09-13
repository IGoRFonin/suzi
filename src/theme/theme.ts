export const theme = (mode: 'light' | 'dark') =>
    ({
        mode,
        spacing: (num = 1) => 4 * num,
        palette: {
            main: {
                red: '#D93627',
                blue: '#3E8AA4',
                lightRed: '#DA606A',
                orange: '#EEA81B',
            },
            secondary: {
                text: mode === 'light' ? '#0E0F0F' : '#F5F5F5',
                second: mode === 'light' ? '#9A99A3' : '#9E9E9E',
                secondBg: mode === 'light' ? '#EDEDED' : '#2E2E2E',
                backGround: mode === 'light' ? '#FFFFFF' : '#292929',
            },
            light: {
                main: {
                    red: '#D93627',
                    blue: '#3E8AA4',
                    lightRed: '#DA606A',
                    orange: '#EEA81B',
                },
                secondary: {
                    text: mode === 'light' ? '#0E0F0F' : '#F5F5F5',
                    second: '#9A99A3',
                    secondBg: '#EDEDED',
                    backGround: '#FFFFFF',
                },
            },
            dark: {
                main: {
                    red: '#D6483B',
                    blue: '#3E8AA4',
                    lightRed: '#EF6E78',
                    orange: '#CD8C09',
                },
                secondary: {
                    text: '#F5F5F5',
                    second: '#9E9E9E',
                    secondBg: '#2E2E2E',
                    backGround: '#292929',
                },
            },
        },
        typography: {
            h1: {
                fontFamily: ['"Roboto"', '"Segoe UI"', 'sans-serif'].join(','),
                fontWeight: 500,
                fontSize: 24,
                lineHeight: '32px',
                color: mode === 'light' ? '#0E0F0F' : '#F5F5F5',
            },
            h2: {
                fontFamily: ['"Roboto"', '"Segoe UI"', 'sans-serif'].join(','),
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: mode === 'light' ? '#0E0F0F' : '#F5F5F5',
            },
            body1: {
                fontFamily: ['"Roboto"', '"Segoe UI"', 'sans-serif'].join(','),
                fontWeight: 300,
                fontSize: 14,
                lineHeight: '24px',
                color: mode === 'light' ? '#0E0F0F' : '#F5F5F5',
            },
            body2: {
                fontFamily: ['"Roboto"', '"Segoe UI"', 'sans-serif'].join(','),
                fontWeight: 300,
                fontSize: 14,
                lineHeight: '20px',
                color: mode === 'light' ? '#9A99A3' : '#F5F5F5',
            },
            subtitle1: {
                fontFamily: ['"Roboto"', '"Segoe UI"', 'sans-serif'].join(','),
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '24px',
                color: mode === 'light' ? '#9A99A3' : '#F5F5F5',
            },
        },
    } as const);

export type Theme = ReturnType<typeof theme>;
