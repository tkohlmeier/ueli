import { Icon } from "./icon";

import { IconType } from "./icon-type";

export const defaultErrorIcon: Icon = {
    parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1"><g id="surface1"><path style=" " d="M 16 3.21875 L 15.125 4.71875 L 3.125 25.5 L 2.28125 27 L 29.71875 27 L 28.875 25.5 L 16.875 4.71875 Z M 16 7.21875 L 26.25 25 L 5.75 25 Z M 15 14 L 15 20 L 17 20 L 17 14 Z M 15 21 L 15 23 L 17 23 L 17 21 Z "></path></g></svg>`,
    type: IconType.SVG,
};

export const defaultFileIcon: Icon = {
    parameter: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><g><polygon style="fill:#FFFFFF;" points="6.5,37.5 6.5,2.5 24.793,2.5 33.5,11.207 33.5,37.5 	"></polygon><g><path style="fill:#788B9C;" d="M24.586,3L33,11.414V37H7V3H24.586 M25,2H6v36h28V11L25,2L25,2z"></path></g></g><g><polygon style="fill:#FFFFFF;" points="24.5,11.5 24.5,2.5 24.793,2.5 33.5,11.207 33.5,11.5 	"></polygon><g><path style="fill:#788B9C;" d="M25,3.414L32.586,11H25V3.414 M25,2h-1v10h10v-1L25,2L25,2z"></path></g></g></svg>`,
    type: IconType.SVG,
};

export const defaultFolderIcon: Icon = {
    parameter: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG32lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMC0wM1QyMTozNjo1MiswMjowMCIgeG1wOkNyZWF0b3JUb29sPSJQaXhlbG1hdG9yIDMuMiIgeG1wOkNyZWF0ZURhdGU9IjIwMTQtMDYtMDNUMTk6NDM6NDArMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTAtMDNUMjE6MzY6NTIrMDI6MDAiIHRpZmY6Q29tcHJlc3Npb249IjUiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjEiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwMjQiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxMDI0IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM5YjMzNmNjLWE0OTQtNDE3NS05NWEyLTgyMDIxNjkyOTMxZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJiYTJhODhjLTBhNGQtNjI0ZC1iNDI3LTY3NjE2YWFkZWE1ZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFiYjIxY2Y4LTc1MjYtNGQ2YS05YTQ2LTI2YzgyNjAyMjQ2NiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYjIxY2Y4LTc1MjYtNGQ2YS05YTQ2LTI2YzgyNjAyMjQ2NiIgc3RFdnQ6d2hlbj0iMjAxOC0xMC0wM1QyMTozNjo1MiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5YjMzNmNjLWE0OTQtNDE3NS05NWEyLTgyMDIxNjkyOTMxZCIgc3RFdnQ6d2hlbj0iMjAxOC0xMC0wM1QyMTozNjo1MiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRh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`,
    type: IconType.URL,
};

export const defaultCalculatorIcon: Icon = {
    parameter: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"> <g> <path style="fill:#B0C1D4;" d="M9,38.5c-1.379,0-2.5-1.122-2.5-2.5V4c0-1.378,1.121-2.5,2.5-2.5h22c1.379,0,2.5,1.122,2.5,2.5v32 c0,1.378-1.121,2.5-2.5,2.5H9z"></path> <g> <path style="fill:#66798F;" d="M31,2c1.103,0,2,0.897,2,2v32c0,1.103-0.897,2-2,2H9c-1.103,0-2-0.897-2-2V4c0-1.103,0.897-2,2-2 H31 M31,1H9C7.343,1,6,2.343,6,4v32c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V4C34,2.343,32.657,1,31,1L31,1z"></path> </g> </g> <g> <path style="fill:#D6DFEB;" d="M7,14V4c0-1.105,0.895-2,2-2h22c1.105,0,2,0.895,2,2v10H7z"></path> </g> <g> <rect x="10.5" y="5.5" style="fill:#BAE0BD;" width="19" height="5"></rect> <path style="fill:#5E9C76;" d="M29,6v4H11V6H29 M30,5H10v6h20V5L30,5z"></path> </g> <g> <rect x="15" y="17" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="10" y="17" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="20" y="17" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="27" y="17" style="fill:#FFEEA3;" width="3" height="3"></rect> </g> <g> <rect x="15" y="22" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="10" y="22" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="20" y="22" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="27" y="22" style="fill:#FFEEA3;" width="3" height="3"></rect> </g> <g> <rect x="15" y="27" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="10" y="27" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="20" y="27" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="27" y="27" style="fill:#FFEEA3;" width="3" height="3"></rect> </g> <g> <rect x="15" y="32" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="10" y="32" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="20" y="32" style="fill:#FFFFFF;" width="3" height="3"></rect> </g> <g> <rect x="27" y="32" style="fill:#F78F8F;" width="3" height="3"></rect> </g> <rect x="27" y="8" style="fill:#5E9C76;" width="1" height="1"></rect> <rect x="25" y="8" style="fill:#5E9C76;" width="1" height="1"></rect> <rect x="23" y="8" style="fill:#5E9C76;" width="1" height="1"></rect> </svg>`,
    type: IconType.SVG,
};

export const defaultUrlIcon: Icon = {
    parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
    <path style="fill:#455A64;" d="M42,19H6V9c0-1.657,1.343-3,3-3h30c1.657,0,3,1.343,3,3V19z"></path>
    <path style="fill:#BBDEFB;" d="M6,16h36v23c0,1.657-1.343,3-3,3H9c-1.657,0-3-1.343-3-3V16z"></path>
    <circle style="fill:#8BC34A;" cx="11" cy="11" r="2"></circle>
    <circle style="fill:#FFEB3B;" cx="17" cy="11" r="2"></circle>
    <path style="fill:#FAFAFA;" d="M39,12c0,0.553-0.447,1-1,1H23c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h15c0.553,0,1,0.447,1,1  V12z"></path>
    <path style="fill:#3F51B5;" d="M30.924,33.235l-5.507-8c-0.182-0.293-0.666-0.293-0.848,0l-5.507,8  c-0.097,0.153-0.088,0.348,0,0.507S19.318,34,19.5,34H23c0,7.375-2.377,10.49-9,10c1.604,0.667,3.712,0.986,5.125,0.996  C25.482,45.041,27,39.921,27,34h3.5c0.182,0,0.35-0.099,0.438-0.258S31.021,33.388,30.924,33.235z"></path>
    </svg>`,
    type: IconType.SVG,
};

export const defaultEmailIcon: Icon = {
    parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
    <g id="surface1">
    <path style=" fill:#78909C;" d="M 40 44 L 8 44 C 5.789063 44 4 42.210938 4 40 L 4 19.082031 C 4 17.777344 4.636719 16.554688 5.707031 15.808594 L 24 3 L 42.292969 15.808594 C 43.363281 16.554688 44 17.777344 44 19.082031 L 44 40 C 44 42.210938 42.210938 44 40 44 "></path>
    <path style=" fill:#FFFFFF;" d="M 12 14 L 36 14 L 36 36 L 12 36 Z "></path>
    <path style=" fill:#CFD8DC;" d="M 40 44 L 8 44 C 5.789063 44 4 42.210938 4 40 L 4 20 L 24 33 L 44 20 L 44 40 C 44 42.210938 42.210938 44 40 44 "></path>
    <path style=" fill:#2196F3;" d="M 15 19 L 33 19 L 33 21 L 15 21 Z "></path>
    <path style=" fill:#2196F3;" d="M 15 23 L 27 23 L 27 25 L 15 25 Z "></path>
    </g>
    </svg>`,
    type: IconType.SVG,
};

export const defaultCurrencyExchangeIcon: Icon = {
    parameter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 23 6 L 23 9.1582031 C 19.571726 9.703163 17.349835 11.607027 16.263672 13.507812 C 14.97871 15.756497 15 18 15 18 C 15 20.842593 16.494146 23.079472 18.367188 24.367188 C 20.240229 25.654902 22.404297 26.283203 24.404297 26.908203 C 26.404297 27.533203 28.240229 28.154903 29.367188 28.929688 C 30.494146 29.704472 31 30.342593 31 32 C 31 32 30.97871 33.256496 30.263672 34.507812 C 29.548634 35.75913 28.416667 37 25 37 C 21.666667 37 20.550549 35.628441 19.789062 34.105469 C 19.027576 32.582497 19 31 19 31 L 15 31 C 15 31 14.97242 33.417503 16.210938 35.894531 C 17.261112 37.994882 19.500047 40.19698 23 40.820312 L 23 44 L 27 44 L 27 40.841797 C 30.428274 40.296837 32.650165 38.392973 33.736328 36.492188 C 35.02129 34.243504 35 32 35 32 C 35 29.157407 33.505854 26.920528 31.632812 25.632812 C 29.759771 24.345098 27.595703 23.716797 25.595703 23.091797 C 23.595703 22.466797 21.759771 21.845097 20.632812 21.070312 C 19.505854 20.295528 19 19.657407 19 18 C 19 18 19.02129 16.743504 19.736328 15.492188 C 20.451366 14.24087 21.583333 13 25 13 C 28.333333 13 29.449451 14.371559 30.210938 15.894531 C 30.972424 17.417503 31 19 31 19 L 35 19 C 35 19 35.02758 16.582497 33.789062 14.105469 C 32.738888 12.005118 30.499953 9.8030201 27 9.1796875 L 27 6 L 23 6 z M 40.955078 8.9902344 A 1.0001 1.0001 0 0 0 40.318359 10.730469 L 45.962891 16 L 36.619141 16 C 36.787141 16.682 36.897125 17.354 36.953125 18 L 45.962891 18 L 40.318359 23.269531 A 1.0001 1.0001 0 1 0 41.681641 24.730469 L 49.964844 17 L 41.681641 9.2695312 A 1.0001 1.0001 0 0 0 40.955078 8.9902344 z M 2 16 C 1.447 16 1 16.447 1 17 C 1 17.553 1.447 18 2 18 L 13 18 C 13 17.369 13.073937 16.693 13.210938 16 L 2 16 z M 8.9804688 24.990234 A 1.0001 1.0001 0 0 0 8.2929688 25.292969 L 0.5859375 33 L 8.2929688 40.707031 A 1.0001 1.0001 0 1 0 9.7070312 39.292969 L 4.4140625 34 L 13.380859 34 C 13.212859 33.318 13.102875 32.646 13.046875 32 L 4.4140625 32 L 9.7070312 26.707031 A 1.0001 1.0001 0 0 0 8.9804688 24.990234 z M 37 32 C 37 32.631 36.926062 33.307 36.789062 34 L 48.5 34 C 49.053 34 49.5 33.553 49.5 33 C 49.5 32.447 49.053 32 48.5 32 L 37 32 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"></path>
</svg>`,
    type: IconType.SVG,
};

export const defaultWorkflowIcon: Icon = {
    parameter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M 6 3 C 4.3549904 3 3 4.3549904 3 6 C 3 7.2931586 3.84267 8.3951413 5 8.8125 L 5 13 L 7 13 L 7 8.8125 C 8.15733 8.3951413 9 7.2931586 9 6 C 9 4.3549904 7.6450096 3 6 3 z M 18 3 A 3 3 0 0 0 15.175781 5 L 11 5 L 11 7 L 15.173828 7 A 3 3 0 0 0 18 9 A 3 3 0 0 0 21 6 A 3 3 0 0 0 18 3 z M 6 5 C 6.5641294 5 7 5.4358706 7 6 C 7 6.5641294 6.5641294 7 6 7 C 5.4358706 7 5 6.5641294 5 6 C 5 5.4358706 5.4358706 5 6 5 z M 17 11 L 17 15 L 14.707031 17.292969 C 14.317031 17.682969 14.317031 18.317031 14.707031 18.707031 L 17.292969 21.292969 C 17.682969 21.683969 18.316031 21.683969 18.707031 21.292969 L 21.292969 18.707031 C 21.683969 18.317031 21.683969 17.683969 21.292969 17.292969 L 19 15 L 19 11 L 17 11 z M 4 15 C 3.448 15 3 15.448 3 16 L 3 20 C 3 20.552 3.448 21 4 21 L 8 21 C 8.552 21 9 20.552 9 20 L 9 16 C 9 15.448 8.552 15 8 15 L 4 15 z"></path>
</svg>`,
    type: IconType.SVG,
};

export const defaultTerminalIcon: Icon = {
    parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
    <g id="surface1">
    <path style=" fill:#CFD8DC;" d="M 41 6 L 7 6 C 6.398438 6 6 6.398438 6 7 L 6 42 L 42 42 L 42 7 C 42 6.398438 41.601563 6 41 6 Z "></path>
    <path style=" fill:#263238;" d="M 8 13 L 40 13 L 40 40 L 8 40 Z "></path>
    <path style=" fill:#90A4AE;" d="M 15 9.5 C 15 10.328125 14.328125 11 13.5 11 C 12.671875 11 12 10.328125 12 9.5 C 12 8.671875 12.671875 8 13.5 8 C 14.328125 8 15 8.671875 15 9.5 Z "></path>
    <path style=" fill:#90A4AE;" d="M 11 9.5 C 11 10.328125 10.328125 11 9.5 11 C 8.671875 11 8 10.328125 8 9.5 C 8 8.671875 8.671875 8 9.5 8 C 10.328125 8 11 8.671875 11 9.5 Z "></path>
    <path style=" fill:#18FFFF;" d="M 18.5 26.5 L 15 24.5 L 15 22 L 21 25.398438 L 21 27.5 L 15 31 L 15 28.5 Z "></path>
    <path style=" fill:#18FFFF;" d="M 23 29 L 33 29 L 33 31 L 23 31 Z "></path>
    </g>
    </svg>`,
    type: IconType.SVG,
};
