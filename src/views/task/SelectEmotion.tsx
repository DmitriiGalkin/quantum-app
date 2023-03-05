import {Container} from "@mui/material";
import React from "react";

// const EMOTIONS = () =>


export default function SelectEmotion({ onClick }: { onClick: (n: number) => void }) {
    return (
        <div>
            <svg onClick={() => onClick(1)} width="164" height="135" viewBox="0 0 164 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1843_4773)">
                    <path d="M82 134.98C127.287 134.98 164 104.985 164 67.9837C164 30.9826 127.287 0.987305 82 0.987305C36.7126 0.987305 0 30.9826 0 67.9837C0 104.985 36.7126 134.98 82 134.98Z" fill="#FFE17D"/>
                    <path d="M93.9031 125.255C48.6158 125.255 11.9031 95.2596 11.9031 58.2585C11.9031 42.2351 18.7966 27.5315 30.2811 16.0029C11.808 28.2873 0 47.006 0 67.9837C0 104.985 36.7126 134.98 82 134.98C107.676 134.98 130.587 125.333 145.622 110.239C131.512 119.622 113.515 125.255 93.9031 125.255Z" fill="#FFD164"/>
                    <path d="M66.1313 62.0404C65.1627 62.0404 64.2043 61.6952 63.5508 61.0315C61.4509 58.8947 58.6068 57.7181 55.5481 57.7181C52.4895 57.7181 49.6458 58.8947 47.5455 61.0315C46.401 62.1922 44.319 62.379 42.8958 61.4442C41.4723 60.5102 41.2452 58.8091 42.3894 57.6464C45.7242 54.2578 50.5186 52.3152 55.5481 52.3152C60.5777 52.3152 65.3718 54.2578 68.7069 57.6464C69.8514 58.8094 69.624 60.5105 68.2005 61.4442C67.5906 61.8452 66.8571 62.0404 66.1313 62.0404Z" fill="#AA7346"/>
                    <path d="M37.0326 51.2357C35.7203 51.2357 34.4803 50.5929 33.9637 49.5367C33.2843 48.1512 34.1084 46.5789 35.8055 46.0249L62.2572 37.3802C63.9337 36.8273 65.8735 37.4975 66.5529 38.8851C67.2323 40.2705 66.4081 41.8428 64.7111 42.3969L38.2594 51.0415C37.8593 51.1734 37.4432 51.2357 37.0326 51.2357Z" fill="#AA7346"/>
                    <path d="M97.8683 62.0404C97.1425 62.0404 96.4116 61.8452 95.7991 61.4453C94.3757 60.5102 94.1486 58.8102 95.2927 57.6474C98.6249 54.2589 103.422 52.3152 108.451 52.3152C113.481 52.3152 118.275 54.2578 121.61 57.6464C122.755 58.8094 122.527 60.5105 121.104 61.4442C119.68 62.3793 117.596 62.1924 116.454 61.0315C114.354 58.8947 111.51 57.7181 108.451 57.7181C105.391 57.7181 102.549 58.8947 100.449 61.0305C99.7953 61.6955 98.8373 62.0404 97.8683 62.0404Z" fill="#AA7346"/>
                    <path d="M126.968 51.2356C126.557 51.2356 126.144 51.1733 125.741 51.0414L99.2889 42.3968C97.5918 41.8428 96.7677 40.2704 97.4471 38.885C98.1264 37.4985 100.051 36.8282 101.743 37.3802L128.195 46.0248C129.892 46.5788 130.716 48.1511 130.036 49.5366C129.52 50.5929 128.28 51.2356 126.968 51.2356Z" fill="#AA7346"/>
                    <path d="M82.0005 80.8871C66.2017 80.8871 51.1207 79.3883 37.2855 76.6791C35.4933 76.3282 33.9488 77.8578 34.5016 79.4521C40.8823 97.8562 59.716 111.207 82.0005 111.207C104.285 111.207 123.119 97.8562 129.499 79.4521C130.052 77.8578 128.508 76.3282 126.715 76.6791C112.88 79.3883 97.7993 80.8871 82.0005 80.8871Z" fill="#9C6846"/>
                    <path d="M126.716 76.6791C112.88 79.3883 97.7996 80.8871 82.0005 80.8871C66.2014 80.8871 51.1207 79.3886 37.2855 76.6791C35.4933 76.3282 33.9488 77.8578 34.5016 79.4521C36.1718 84.2696 38.7131 88.7277 41.9284 92.7041C55.074 94.7443 68.4477 95.8668 82.0062 95.8668C95.5603 95.8668 108.929 94.7451 122.071 92.7064C125.287 88.7296 127.829 84.2709 129.5 79.4524C130.052 77.8576 128.508 76.3282 126.716 76.6791Z" fill="#7D5046"/>
                    <path d="M117.57 84.0597C119 82.0579 120.196 79.913 121.199 77.6801C108.905 79.7531 95.7244 80.8868 81.9999 80.8868C68.2672 80.8868 55.0796 79.752 42.7783 77.6765C43.7867 79.92 45.0026 82.0689 46.4421 84.0791C48.1061 86.403 50.9232 87.8895 53.988 88.1941C63.1646 89.1061 72.5171 89.5953 81.9999 89.5953C91.4809 89.5953 100.831 89.1064 110.006 88.1946C113.081 87.8892 115.903 86.3931 117.57 84.0597Z" fill="white"/>
                    <path d="M4.64854 96.6035C-1.54951 91.5395 -1.54951 83.3293 4.64854 78.2653C13.8995 70.707 33.3178 67.3025 39.855 66.3394C40.9396 66.1795 41.8855 66.9523 41.6898 67.8385C40.511 73.1798 36.3441 89.0452 27.0932 96.6032C20.8954 101.667 10.8463 101.667 4.64854 96.6035Z" fill="#A5CDFF"/>
                    <path d="M13.1906 96.1075C6.99258 91.0435 6.99258 82.8333 13.1906 77.7693C17.9633 73.8699 26.5758 70.1519 34.9001 67.1632C26.3151 68.7439 12.1451 72.14 4.64854 78.265C-1.54951 83.329 -1.54951 91.5392 4.64854 96.6031C9.1185 100.255 15.5786 101.231 21.1658 99.6156C18.2445 99.1186 15.4578 97.9598 13.1906 96.1075Z" fill="#8CB4EB"/>
                    <path d="M159.352 96.6035C165.55 91.5395 165.55 83.3293 159.352 78.2653C150.101 70.707 130.682 67.3025 124.145 66.3394C123.06 66.1795 122.115 66.9523 122.31 67.8385C123.489 73.1798 127.656 89.0452 136.907 96.6032C143.105 101.667 153.154 101.667 159.352 96.6035Z" fill="#A5CDFF"/>
                    <path d="M144.235 93.9464C137.439 88.3938 130.121 75.6922 125.402 66.5315C124.947 66.4601 124.52 66.3944 124.145 66.3394C123.06 66.1795 122.114 66.9523 122.31 67.8385C123.488 73.1798 127.656 89.0452 136.907 96.6032C142.663 101.306 151.703 101.583 157.932 97.5506C153.09 98.1726 147.967 96.995 144.235 93.9464Z" fill="#8CB4EB"/>
                </g>
                <defs>
                    <clipPath id="clip0_1843_4773">
                        <rect width="164" height="133.993" fill="white" transform="translate(0 0.987305)"/>
                    </clipPath>
                </defs>
            </svg>
            <svg onClick={() => onClick(2)} width="164" height="135" viewBox="0 0 164 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1843_4788)">
                    <path d="M82 134.98C127.287 134.98 164 104.985 164 67.9837C164 30.9826 127.287 0.987305 82 0.987305C36.7126 0.987305 0 30.9826 0 67.9837C0 104.985 36.7126 134.98 82 134.98Z" fill="#FFE17D"/>
                    <path d="M93.9031 125.255C48.6158 125.255 11.9031 95.2596 11.9031 58.2585C11.9031 42.2351 18.7966 27.5315 30.2814 16.0029C11.8077 28.2873 0 47.006 0 67.9837C0 104.985 36.7126 134.98 82 134.98C107.676 134.98 130.587 125.333 145.622 110.239C131.512 119.622 113.515 125.255 93.9031 125.255Z" fill="#FFD164"/>
                    <path d="M52.9028 64.2015C47.8732 64.2015 43.0765 62.2578 39.744 58.8693C38.5995 57.7063 38.827 56.0062 40.2504 55.0714C41.6816 54.1364 43.7559 54.3243 44.9001 55.4862C47.0001 57.622 49.8415 58.7986 52.9028 58.7986C55.9637 58.7986 58.8052 57.622 60.9055 55.4862C62.0499 54.3243 64.1265 54.1366 65.5551 55.0714C66.9786 56.0065 67.2057 57.7065 66.0615 58.8693C62.7293 62.2578 57.9323 64.2015 52.9028 64.2015Z" fill="#AA7346"/>
                    <path d="M111.107 64.2015C106.077 64.2015 101.281 62.2578 97.9481 58.8693C96.8036 57.7063 97.0311 56.0062 98.4545 55.0714C99.8831 54.1364 101.963 54.3243 103.104 55.4862C105.204 57.622 108.046 58.7986 111.107 58.7986C114.168 58.7986 117.009 57.622 119.11 55.4862C120.254 54.3243 122.328 54.1366 123.759 55.0714C125.183 56.0065 125.41 57.7065 124.266 58.8693C120.933 62.2578 116.136 64.2015 111.107 64.2015Z" fill="#AA7346"/>
                    <path d="M66.1267 51.2356C65.6308 51.2356 65.1244 51.1438 64.6516 50.9496L38.1999 40.1438C36.5647 39.476 35.9036 37.8539 36.7197 36.519C37.5333 35.1861 39.5225 34.6386 41.1551 35.3107L67.6068 46.1164C69.242 46.7843 69.9031 48.4064 69.087 49.7413C68.5082 50.6879 67.3406 51.2356 66.1267 51.2356Z" fill="#AA7346"/>
                    <path d="M97.8734 51.2357C96.6594 51.2357 95.4919 50.6879 94.9131 49.7413C94.0969 48.4064 94.7581 46.7846 96.3933 46.1165L122.845 35.3107C124.478 34.6459 126.464 35.1872 127.28 36.519C128.096 37.8539 127.435 39.4757 125.8 40.1438L99.3485 50.9496C98.8757 51.1427 98.3696 51.2357 97.8734 51.2357Z" fill="#AA7346"/>
                    <path d="M121.675 92.2969C121.031 92.2969 120.383 92.1448 119.812 91.8274C110.497 86.6312 96.7132 83.6522 81.9997 83.6522C67.2861 83.6522 53.5021 86.6312 44.1874 91.8274C42.6788 92.6685 40.6227 92.3508 39.5919 91.1181C38.5611 89.8855 38.9513 88.2046 40.4574 87.3635C50.8467 81.5712 65.9895 78.2491 82 78.2491C98.0105 78.2491 113.153 81.5712 123.543 87.3635C125.049 88.2046 125.439 89.8855 124.408 91.1181C123.767 91.8844 122.731 92.2969 121.675 92.2969Z" fill="#AA7346"/>
                    <path d="M58.8309 105.575L74.3702 74.7799C74.8231 73.8822 73.4 73.1505 72.6053 73.8723L45.2887 98.6837C43.7182 100.006 41.1772 100.359 39.303 99.334C36.0961 97.5798 31.8317 97.1417 27.8246 98.7222C24.2836 100.119 21.8803 103.054 21.5228 106.254C21.3114 108.146 21.7637 109.824 22.6509 111.261C23.4754 112.596 23.3393 114.85 22.5622 116.204C20.7733 119.319 20.4581 123.031 22.1823 126.624C24.7243 131.92 31.457 135.34 38.3956 134.858C43.1022 134.531 47.036 132.658 49.6642 129.968C50.8061 128.8 53.2193 127.703 55.0496 127.716C57.0192 127.73 59.0618 127.318 61.0452 126.326C64.3982 124.648 66.5565 121.588 66.5222 118.376C66.4831 114.74 64.1154 111.81 60.7707 110.237C58.8165 109.318 58.0743 107.311 58.8309 105.575Z" fill="white"/>
                    <path d="M30.1076 124.423C28.4064 120.878 28.6905 117.218 30.4167 114.128C31.3187 112.514 31.5544 110.645 30.5762 109.061C29.7562 107.733 29.3078 106.199 29.4116 104.48C29.5688 101.87 31.1086 99.4361 33.4904 97.7738C31.9462 97.7126 30.3507 97.8923 28.7751 98.3864C24.5998 99.6963 21.7071 103.03 21.487 106.68C21.3832 108.399 21.832 109.933 22.6517 111.261C23.6299 112.846 23.3942 114.714 22.4925 116.328C20.7663 119.418 20.4819 123.079 22.1834 126.624C24.7254 131.921 31.458 135.34 38.3966 134.858C41.3009 134.657 43.9108 133.866 46.1014 132.658C39.2413 133.053 32.6227 129.664 30.1076 124.423Z" fill="#FFF1C4"/>
                    <path d="M105.18 105.535L89.6313 74.7754C89.1777 73.878 90.5999 73.1455 91.3952 73.8668L118.722 98.6447C120.293 99.9674 122.834 100.32 124.707 99.2951C127.914 97.5409 132.179 97.1028 136.186 98.6832C139.727 100.08 142.13 103.015 142.488 106.215C142.699 108.107 142.247 109.785 141.359 111.222C140.535 112.557 140.671 114.811 141.448 116.165C143.237 119.28 143.552 122.992 141.828 126.585C139.286 131.881 132.553 135.301 125.615 134.819C120.908 134.492 116.974 132.619 114.346 129.929C113.204 128.761 110.791 127.664 108.961 127.677C106.991 127.691 104.949 127.279 102.965 126.287C99.6122 124.609 97.4539 121.549 97.4882 118.337C97.5273 114.701 99.895 111.771 103.24 110.198C105.195 109.278 105.937 107.271 105.18 105.535Z" fill="white"/>
                    <path d="M128.26 128.451C123.616 128.129 119.724 126.301 117.097 123.668C115.724 122.293 113.778 121.293 111.606 121.309C109.785 121.322 107.903 120.971 106.062 120.135C102.578 118.551 100.324 115.521 100.163 112.305C98.728 113.703 97.7677 115.473 97.5399 117.492C97.1296 121.131 99.5089 124.726 103.417 126.503C105.258 127.339 107.14 127.69 108.961 127.677C111.133 127.661 113.079 128.661 114.452 130.036C117.079 132.668 120.97 134.496 125.615 134.819C132.553 135.301 139.286 131.881 141.828 126.584C142.47 125.248 142.827 123.896 142.934 122.564C139.761 126.479 134.099 128.857 128.26 128.451Z" fill="#FFF1C4"/>
                </g>
                <defs>
                    <clipPath id="clip0_1843_4788">
                        <rect width="164" height="133.993" fill="white" transform="translate(0 0.987305)"/>
                    </clipPath>
                </defs>
            </svg>
            <svg onClick={() => onClick(3)} width="164" height="135" viewBox="0 0 164 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1843_4712)">
                    <path d="M82 134.764C127.287 134.764 164 104.769 164 67.7681C164 30.767 127.287 0.771729 82 0.771729C36.7126 0.771729 0 30.767 0 67.7681C0 104.769 36.7126 134.764 82 134.764Z" fill="#E6646E"/>
                    <path d="M93.9031 125.039C48.6158 125.039 11.9031 95.044 11.9031 58.0429C11.9031 42.0195 18.7966 27.3159 30.2814 15.7873C11.8077 28.0717 0 46.7904 0 67.7681C0 104.769 36.7126 134.764 82 134.764C107.676 134.764 130.587 125.117 145.622 110.023C131.512 119.407 113.515 125.039 93.9031 125.039Z" fill="#DC4655"/>
                    <path d="M103.171 106.688C102.066 106.688 100.945 106.574 99.8268 106.335C88.5307 103.931 75.4703 103.931 64.1741 106.335C57.1064 107.843 49.8828 104.378 48.041 98.6034C46.1992 92.8292 50.4356 86.9269 57.5043 85.4221C73.1506 82.0896 90.8504 82.0896 106.497 85.4221C113.566 86.9269 117.802 92.8289 115.96 98.6034C114.41 103.465 109.045 106.688 103.171 106.688Z" fill="#5A4650"/>
                    <path d="M66.1267 55.3584C65.6773 55.3584 65.2224 55.2825 64.7833 55.1241L40.9767 46.4635C39.3104 45.8567 38.559 44.2592 39.3027 42.8968C40.0443 41.5333 41.9918 40.9235 43.6683 41.527L67.4749 50.1876C69.1411 50.7945 69.8926 52.3919 69.1488 53.7544C68.6011 54.7598 67.3922 55.3584 66.1267 55.3584Z" fill="#5A4650"/>
                    <path d="M97.8739 55.3583C96.608 55.3583 95.3991 54.7611 94.8517 53.7543C94.1076 52.3919 94.8594 50.7945 96.5257 50.1876L120.332 41.527C122.009 40.9235 123.957 41.5322 124.698 42.8967C125.442 44.2592 124.69 45.8566 123.024 46.4635L99.2173 55.1241C98.7781 55.2822 98.3236 55.3583 97.8739 55.3583Z" fill="#5A4650"/>
                    <path d="M124.255 29.3146C123.222 28.4706 123.222 27.1021 124.255 26.2581L126.66 24.2935C127.951 23.2383 127.951 21.5286 126.66 20.4734C125.368 19.4182 123.276 19.4182 121.984 20.4734L119.58 22.438C118.547 23.282 116.872 23.282 115.839 22.438L113.434 20.4734C112.143 19.4182 110.05 19.4182 108.759 20.4734C107.467 21.5286 107.467 23.2383 108.759 24.2935L111.163 26.2581C112.196 27.1021 112.196 28.4706 111.163 29.3146L108.759 31.2792C107.467 32.3344 107.467 34.0441 108.759 35.0993C109.404 35.6269 110.249 35.8907 111.096 35.8907C111.944 35.8907 112.788 35.6269 113.434 35.0993L115.839 33.1347C116.872 32.2907 118.546 32.2907 119.579 33.1347L121.984 35.0993C122.63 35.6269 123.474 35.8907 124.322 35.8907C125.169 35.8907 126.014 35.6269 126.659 35.0993C127.951 34.0441 127.951 32.3344 126.659 31.2792L124.255 29.3146Z" fill="white"/>
                    <path d="M54.2252 72.0904C50.573 72.0904 47.6123 69.6715 47.6123 66.6875V62.3652C47.6123 59.3813 50.573 56.9623 54.2252 56.9623C57.8774 56.9623 60.838 59.3813 60.838 62.3652V66.6875C60.838 69.6715 57.8774 72.0904 54.2252 72.0904Z" fill="#5A4650"/>
                    <path d="M54.2259 56.9623C53.773 56.9623 53.3309 57.0003 52.9033 57.0712V64.5264C52.9033 66.3167 54.6798 67.7681 56.871 67.7681C59.0623 67.7681 60.8387 66.3167 60.8387 64.5264V62.3652C60.8387 59.3813 57.8784 56.9623 54.2259 56.9623Z" fill="#6E5A64"/>
                    <path d="M109.774 72.0904C106.122 72.0904 103.161 69.6715 103.161 66.6875V62.3652C103.161 59.3813 106.122 56.9623 109.774 56.9623C113.426 56.9623 116.387 59.3813 116.387 62.3652V66.6875C116.387 69.6715 113.426 72.0904 109.774 72.0904Z" fill="#5A4650"/>
                    <path d="M109.775 56.9623C109.322 56.9623 108.88 57.0003 108.452 57.0712V64.5264C108.452 66.3167 110.229 67.7681 112.42 67.7681C114.611 67.7681 116.388 66.3167 116.388 64.5264V62.3652C116.388 59.3813 113.427 56.9623 109.775 56.9623Z" fill="#6E5A64"/>
                    <path d="M81.9997 91.7816C91.4118 91.7816 100.642 92.5868 109.556 94.1652C113.016 94.7775 115.722 91.5332 113.563 89.2417C111.853 87.4271 109.426 86.0458 106.496 85.4221C90.8496 82.0896 73.1498 82.0896 57.5035 85.4221C54.5733 86.0458 52.1459 87.4273 50.4364 89.2417C48.2772 91.5332 50.9838 94.7778 54.4432 94.1652C63.3578 92.5868 72.5876 91.7816 81.9997 91.7816Z" fill="white"/>
                    <path d="M81.9996 96.1039C72.4738 96.1039 63.146 96.9615 54.1683 98.6416C51.0693 99.2216 49.9571 102.467 52.3861 104.142C55.5376 106.316 59.8721 107.253 64.1732 106.335C75.4694 103.931 88.5298 103.931 99.8259 106.335C100.944 106.574 102.066 106.688 103.17 106.688C106.337 106.688 109.343 105.745 111.686 104.115C114.087 102.444 112.941 99.2245 109.867 98.6484C100.878 96.9639 91.5379 96.1039 81.9996 96.1039Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_1843_4712">
                        <rect width="164" height="133.993" fill="white" transform="translate(0 0.771729)"/>
                    </clipPath>
                </defs>
            </svg>
            <svg onClick={() => onClick(4)} width="164" height="135" viewBox="0 0 164 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1843_4726)">
                    <path d="M82 134.764C127.287 134.764 164 104.769 164 67.7681C164 30.767 127.287 0.771729 82 0.771729C36.7126 0.771729 0 30.767 0 67.7681C0 104.769 36.7126 134.764 82 134.764Z" fill="#FFE17D"/>
                    <path d="M52.9027 74.2518C64.5898 74.2518 74.0641 66.511 74.0641 56.9623C74.0641 47.4136 64.5898 39.6728 52.9027 39.6728C41.2155 39.6728 31.7412 47.4136 31.7412 56.9623C31.7412 66.511 41.2155 74.2518 52.9027 74.2518Z" fill="white"/>
                    <path d="M93.9031 125.039C48.6158 125.039 11.9031 95.044 11.9031 58.0429C11.9031 42.0195 18.7966 27.3159 30.2814 15.7873C11.8077 28.0717 0 46.7904 0 67.7681C0 104.769 36.7126 134.764 82 134.764C107.676 134.764 130.587 125.117 145.622 110.023C131.512 119.407 113.515 125.039 93.9031 125.039Z" fill="#FFD164"/>
                    <path d="M97.871 98.5647H74.0644C72.238 98.5647 70.7578 97.3554 70.7578 95.8631C70.7578 94.3709 72.238 93.1616 74.0644 93.1616H97.871C99.6974 93.1616 101.178 94.3709 101.178 95.8631C101.178 97.3554 99.6974 98.5647 97.871 98.5647Z" fill="#AA7346"/>
                    <path d="M59.5155 53.7203C63.8981 53.7203 67.4509 50.8176 67.4509 47.2368C67.4509 43.6561 63.8981 40.7534 59.5155 40.7534C55.1329 40.7534 51.5801 43.6561 51.5801 47.2368C51.5801 50.8176 55.1329 53.7203 59.5155 53.7203Z" fill="#5A4650"/>
                    <path d="M111.097 74.2518C122.784 74.2518 132.258 66.511 132.258 56.9623C132.258 47.4136 122.784 39.6728 111.097 39.6728C99.4098 39.6728 89.9355 47.4136 89.9355 56.9623C89.9355 66.511 99.4098 74.2518 111.097 74.2518Z" fill="white"/>
                    <path d="M117.71 53.7203C122.092 53.7203 125.645 50.8176 125.645 47.2368C125.645 43.6561 122.092 40.7534 117.71 40.7534C113.327 40.7534 109.774 43.6561 109.774 47.2368C109.774 50.8176 113.327 53.7203 117.71 53.7203Z" fill="#5A4650"/>
                </g>
                <defs>
                    <clipPath id="clip0_1843_4726">
                        <rect width="164" height="133.993" fill="white" transform="translate(0 0.771729)"/>
                    </clipPath>
                </defs>
            </svg>
            <svg onClick={() => onClick(5)} width="164" height="135" viewBox="0 0 164 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1843_4735)">
                    <path d="M82 134.549C127.287 134.549 164 104.554 164 67.5525C164 30.5515 127.287 0.556152 82 0.556152C36.7126 0.556152 0 30.5515 0 67.5525C0 104.554 36.7126 134.549 82 134.549Z" fill="#FFE17D"/>
                    <path d="M93.9031 124.824C48.6158 124.824 11.9031 94.8284 11.9031 57.8273C11.9031 41.8039 18.7966 27.1003 30.2814 15.5717C11.8077 27.8561 0 46.5748 0 67.5525C0 104.554 36.7126 134.549 82 134.549C107.676 134.549 130.587 124.901 145.622 109.808C131.512 119.191 113.515 124.824 93.9031 124.824Z" fill="#FFD164"/>
                    <path d="M37.0346 57.2879C35.8206 57.2879 34.653 56.7402 34.0742 55.7936C33.2581 54.4586 33.9192 52.8368 35.5544 52.1687L56.7158 43.5241C58.3485 42.8604 60.3373 43.4006 61.1512 44.7324C61.9674 46.0673 61.3062 47.6891 59.671 48.3572L38.5096 57.0019C38.0368 57.195 37.5304 57.2879 37.0346 57.2879Z" fill="#AA7346"/>
                    <path d="M126.965 57.2879C126.469 57.2879 125.963 57.196 125.49 57.0018L104.329 48.3572C102.694 47.6894 102.032 46.0673 102.849 44.7324C103.662 43.3995 105.651 42.8531 107.284 43.5241L128.445 52.169C130.081 52.8368 130.742 54.4589 129.926 55.7938C129.347 56.7401 128.179 57.2879 126.965 57.2879Z" fill="#AA7346"/>
                    <path d="M81.9816 106.462C74.6772 106.462 68.7559 101.624 68.7559 95.6557V89.172C68.7559 83.2041 74.6772 78.3662 81.9816 78.3662C89.286 78.3662 95.2073 83.2041 95.2073 89.172V95.6555C95.2073 101.624 89.286 106.462 81.9816 106.462Z" fill="#9C6846"/>
                    <path d="M69.0225 87.0032H94.9389C93.7096 82.0751 88.3757 78.3662 81.9807 78.3662H81.9804C75.5853 78.3662 70.2518 82.0748 69.0225 87.0032Z" fill="white"/>
                    <path d="M68.7559 89.1719V93.4864H95.2076V89.1719C95.2076 88.429 95.115 87.7038 94.9401 87.0029H69.0236C68.8484 87.704 68.7559 88.429 68.7559 89.1719Z" fill="#7D5046"/>
                    <path d="M44.652 65.2126C42.9739 73.3661 38.2874 73.5333 37.0497 82.8568C35.7268 92.8238 40.9847 93.3127 39.6619 103.28C38.436 112.514 33.8411 112.797 32.1191 120.713C39.1349 125.114 47.0454 128.602 55.591 130.977C56.0253 121.277 60.8387 120.775 60.8387 110.163C60.8387 99.0508 55.5484 99.0508 55.5484 87.9386C55.5484 76.8339 60.8387 76.8339 60.8387 65.7293L44.652 65.2126Z" fill="#A5CDFF"/>
                    <path d="M52.8924 70.2541C47.8683 70.2541 43.0713 68.3114 39.7362 64.9239C38.5918 63.7609 38.8166 62.0609 40.2401 61.125C41.6607 60.192 43.7427 60.3779 44.8872 61.5367C46.9926 63.6745 49.8367 64.8512 52.8924 64.8512C55.9508 64.8512 58.7948 63.6745 60.8951 61.5377C62.037 60.3771 64.1216 60.1902 65.5448 61.125C66.9682 62.059 67.1954 63.7601 66.0512 64.9229C62.7161 68.3112 57.922 70.2541 52.8924 70.2541Z" fill="#AA7346"/>
                    <path d="M59.388 118.599C51.8062 115.72 44.8445 111.935 38.7346 107.393C36.9072 112.837 33.5388 114.186 32.1191 120.713C39.1349 125.114 47.0454 128.602 55.591 130.977C55.8687 124.776 57.9325 122.327 59.388 118.599Z" fill="#8CB4EB"/>
                    <path d="M126.95 82.857C125.713 73.5335 121.026 73.366 119.348 65.2129L103.161 65.7292C103.161 76.8339 108.451 76.8339 108.451 87.9385C108.451 99.051 103.161 99.051 103.161 110.163C103.161 120.775 107.974 121.277 108.409 130.977C116.954 128.602 124.865 125.114 131.881 120.713C130.159 112.797 125.564 112.515 124.338 103.28C123.015 93.3129 128.273 92.824 126.95 82.857Z" fill="#A5CDFF"/>
                    <path d="M108.409 130.977C116.955 128.602 124.865 125.114 131.881 120.713C131.621 119.519 131.291 118.513 130.922 117.609C123.52 120.677 115.471 122.846 106.987 123.96C107.703 125.79 108.273 127.929 108.409 130.977Z" fill="#8CB4EB"/>
                    <path d="M111.107 70.2541C106.077 70.2541 101.283 68.3115 97.9481 64.9229C96.8036 63.7599 97.0311 62.0588 98.4545 61.1251C99.878 60.19 101.963 60.3769 103.104 61.5378C105.204 63.6746 108.048 64.8512 111.107 64.8512C114.165 64.8512 117.007 63.6746 119.112 61.5378C120.249 60.3771 122.339 60.1903 123.759 61.1251C125.183 62.0602 125.407 63.7612 124.263 64.9229C120.928 68.3112 116.134 70.2541 111.107 70.2541Z" fill="#AA7346"/>
                </g>
                <defs>
                    <clipPath id="clip0_1843_4735">
                        <rect width="164" height="133.993" fill="white" transform="translate(0 0.556152)"/>
                    </clipPath>
                </defs>
            </svg>
            <svg onClick={() => onClick(6)} width="164" height="130" viewBox="0 0 164 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1843_2850)">
                    <path d="M82 129.491C127.287 129.491 164 100.632 164 65.0323C164 29.4329 127.287 0.573853 82 0.573853C36.7126 0.573853 0 29.4329 0 65.0323C0 100.632 36.7126 129.491 82 129.491Z" fill="#FFE17D"/>
                    <path d="M93.9031 120.134C48.6158 120.134 11.9031 91.2749 11.9031 55.6755C11.9031 40.2591 18.7966 26.1125 30.2814 15.0206C11.8077 26.8397 0 44.8493 0 65.0323C0 100.632 36.7126 129.491 82 129.491C107.676 129.491 130.587 120.209 145.622 105.687C131.512 114.715 113.515 120.134 93.9031 120.134Z" fill="#FFD164"/>
                    <path d="M81.9995 77.4468C66.2007 77.4468 51.1198 76.0048 37.2845 73.3983C35.4924 73.0606 33.9478 74.5323 34.5007 76.0662C40.8813 93.7732 59.715 106.619 81.9998 106.619C104.285 106.619 123.118 93.7732 129.499 76.0662C130.052 74.5323 128.507 73.0606 126.715 73.3983C112.879 76.0048 97.7983 77.4468 81.9995 77.4468Z" fill="#9C6846"/>
                    <path d="M126.715 73.3983C112.879 76.0048 97.7986 77.4468 81.9995 77.4468C66.2004 77.4468 51.1198 76.0051 37.2845 73.3983C35.4924 73.0606 33.9478 74.5323 34.5007 76.0662C36.1708 80.7012 38.7121 84.9905 41.9274 88.8162C55.0731 90.7791 68.4468 91.8591 82.0053 91.8591C95.5593 91.8591 108.928 90.7799 122.07 88.8184C125.286 84.9922 127.828 80.7025 129.499 76.0665C130.051 74.5321 128.507 73.0606 126.715 73.3983Z" fill="#7D5046"/>
                    <path d="M54.2261 58.8992C50.5739 58.8992 47.6133 56.5718 47.6133 53.7009V45.2788C47.6133 42.4079 50.5739 40.0806 54.2261 40.0806C57.8783 40.0806 60.839 42.4079 60.839 45.2788V53.7009C60.839 56.5718 57.8783 58.8992 54.2261 58.8992Z" fill="#7D5046"/>
                    <path d="M54.2259 40.0806C53.773 40.0806 53.3309 40.1171 52.9033 40.1853V51.6214C52.9033 53.3439 54.6798 54.7403 56.871 54.7403C59.0623 54.7403 60.8387 53.3439 60.8387 51.6214V45.2785C60.8387 42.4079 57.8784 40.0806 54.2259 40.0806Z" fill="#9C6846"/>
                    <path d="M109.774 58.8992C106.122 58.8992 103.161 56.5718 103.161 53.7009V45.2788C103.161 42.4079 106.122 40.0806 109.774 40.0806C113.426 40.0806 116.387 42.4079 116.387 45.2788V53.7009C116.387 56.5718 113.426 58.8992 109.774 58.8992Z" fill="#7D5046"/>
                    <path d="M109.775 40.0806C109.322 40.0806 108.88 40.1171 108.452 40.1853V51.6214C108.452 53.3439 110.229 54.7403 112.42 54.7403C114.611 54.7403 116.388 53.3439 116.388 51.6214V45.2785C116.388 42.4079 113.427 40.0806 109.775 40.0806Z" fill="#9C6846"/>
                    <path d="M117.57 80.4993C119 78.5733 120.196 76.5097 121.199 74.3614C108.905 76.3558 95.7244 77.4466 81.9999 77.4466C68.2672 77.4466 55.0796 76.3548 42.7783 74.3578C43.7867 76.5165 45.0026 78.5839 46.4421 80.5179C48.1061 82.7538 50.9232 84.184 53.988 84.4771C63.1646 85.3546 72.5171 85.8252 81.9999 85.8252C91.4809 85.8252 100.831 85.3548 110.006 84.4776C113.081 84.1837 115.903 82.7442 117.57 80.4993Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_1843_2850">
                        <rect width="164" height="128.917" fill="white" transform="translate(0 0.573853)"/>
                    </clipPath>
                </defs>
            </svg>

        </div>
    )
}