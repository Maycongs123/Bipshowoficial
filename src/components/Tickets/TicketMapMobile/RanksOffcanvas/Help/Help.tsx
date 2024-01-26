import React from 'react';
import { Button } from '@/components';
import { ContainerHelp } from './styles';
import { IHelp } from './interface';

export const Help: React.FC<IHelp> = ({ onClose }) => {
  return (
    <ContainerHelp>
      <svg width="103" height="102" viewBox="0 0 103 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_114_6523)">
          <path d="M16.7458 43.1913V42.1249C16.7458 41.934 16.7082 41.7451 16.635 41.5688C16.5619 41.3925 16.4547 41.2324 16.3195 41.0975C16.1844 40.9627 16.024 40.8558 15.8474 40.7829C15.6709 40.7101 15.4817 40.6727 15.2908 40.673H7.79146L19.0664 29.4333C19.1475 29.3531 19.2119 29.2576 19.2558 29.1523C19.2997 29.0471 19.3224 28.9342 19.3224 28.8202C19.3224 28.7061 19.2997 28.5932 19.2558 28.488C19.2119 28.3828 19.1475 28.2873 19.0664 28.2071L17.5973 26.7612C17.3248 26.4913 16.9566 26.3398 16.573 26.3398C16.1893 26.3398 15.8211 26.4913 15.5486 26.7612C11.4592 30.8552 4.59347 37.7452 4.52551 37.7053C4.52551 35.2089 4.52551 32.5328 4.52551 29.9465C4.52498 29.5618 4.37165 29.193 4.0992 28.9212C3.82675 28.6493 3.45746 28.4966 3.07242 28.4966H1.95312C1.76155 28.4964 1.57182 28.534 1.39488 28.6074C1.21794 28.6807 1.05729 28.7884 0.922203 28.9241C0.787113 29.0598 0.680257 29.2209 0.607799 29.3981C0.535341 29.5753 0.498715 29.7651 0.500034 29.9565V43.1913C0.500034 43.3819 0.537634 43.5706 0.610683 43.7466C0.683732 43.9227 0.790797 44.0826 0.925755 44.2173C1.06071 44.3519 1.22092 44.4587 1.3972 44.5314C1.57349 44.6042 1.76239 44.6415 1.95312 44.6412H15.2908C15.4817 44.6417 15.6708 44.6046 15.8473 44.532C16.0238 44.4594 16.1842 44.3526 16.3194 44.218C16.4546 44.0833 16.5618 43.9233 16.635 43.7471C16.7082 43.5709 16.7458 43.3821 16.7458 43.1913Z" fill="#956AFB" />
          <path d="M102.472 66.1692C102.432 62.7742 100.821 60.2379 97.7927 58.754C93.2935 56.5572 97.0951 58.3905 93.7052 56.8428C93.7052 55.8942 93.7052 55.0454 93.7052 56.8428C93.7052 56.673 93.7052 56.5053 93.7052 56.3375V56.3175C93.7052 51.9239 91.5926 49.793 91.5926 49.793C90.429 48.5318 88.9154 47.6459 87.2453 47.2487C85.499 46.8442 83.6664 47.0559 82.0585 47.8478C82.0585 47.734 82.0585 47.5682 82.0585 47.3106V47.2986C82.0585 42.895 79.9459 40.7741 79.9459 40.7741C78.7847 39.5117 77.2733 38.6238 75.6046 38.2238C73.6393 37.7614 71.5711 38.0778 69.8342 39.1065C69.8342 37.2292 69.8342 35.352 69.8342 33.4747C69.8342 32.1766 69.8162 30.8785 69.8342 29.5803V29.5564C69.8342 25.1627 67.7215 23.0318 67.7215 23.0318C66.5604 21.7694 65.0489 20.8815 63.3803 20.4815C58.3374 19.3072 53.5265 23.2475 53.4805 28.6537C53.4365 33.8342 53.4705 39.0147 53.4705 44.1951V67.4015C52.4711 66.3789 51.6716 65.5561 50.8601 64.7453C47.3863 61.2704 43.1969 59.5668 38.268 59.7705C35.6984 59.8759 33.192 60.5979 30.9606 61.8755C28.5901 63.2195 28.3343 65.3285 30.267 67.2577C39.2874 76.2606 48.2698 85.2755 57.3361 94.2365C61.6454 98.4983 66.8361 101.081 72.9063 101.804C73.0928 101.849 73.2733 101.916 73.444 102.003H78.241C79.4402 101.772 80.6754 101.626 81.8507 101.292C92.542 98.2567 99.0159 91.141 101.772 80.5484C102.218 78.8349 102.35 77.0155 102.416 75.2361C102.526 72.2145 102.508 69.1889 102.472 66.1692ZM98.4083 73.892C98.4083 79.4739 96.8553 84.5606 93.4114 89.0021C89.5499 93.9829 84.521 97.1303 78.211 97.7634C71.3093 98.4544 65.2631 96.2656 60.3162 91.3727C51.7282 82.8863 43.171 74.3694 34.6443 65.8218C34.4124 65.5901 34.1946 65.3464 33.9048 65.0409C38.7597 62.8441 43.9285 63.7528 47.7401 67.4534C49.8168 69.4685 51.8455 71.5315 53.8922 73.5785C54.5938 74.2815 55.4253 74.5471 56.3487 74.1637C57.2381 73.7922 57.5959 73.0153 57.6179 72.0767C57.6179 71.7791 57.6179 71.4776 57.6179 71.18C57.6179 57.2003 57.6179 43.2205 57.6179 29.2408C57.5881 28.6773 57.6189 28.1122 57.7098 27.5553C58.1675 25.5062 60.0084 24.2521 62.181 24.4518C64.0778 24.6275 65.6249 26.2851 65.6688 28.2982C65.7188 30.5549 65.6908 32.8156 65.6928 35.0724C65.6928 39.1997 65.6928 43.3211 65.6928 47.4364C65.6928 47.1109 65.6728 49.799 65.6928 47.754V48.8244C65.6928 49.09 65.6808 49.3556 65.6928 49.6233C65.7908 51.0013 66.6822 51.9579 67.8215 51.9179C69.0207 51.876 69.8202 50.9393 69.8202 49.5214C69.8202 49.09 69.8202 48.658 69.8202 48.2253C69.8202 40.3707 69.8362 54.8317 69.8382 46.9771C69.8084 46.4136 69.8392 45.8485 69.9302 45.2915C70.3879 43.2405 72.2287 41.9883 74.4014 42.188C76.2982 42.3638 77.8452 44.0214 77.8892 46.0345C77.9391 48.2912 77.9112 48.2652 77.9132 50.524V51.5784C77.9132 51.836 77.9012 52.0937 77.9132 52.3493C78.0111 53.7253 78.9025 54.6839 80.0418 54.644C80.9892 54.61 81.6908 54.0129 81.9406 53.0583C82.7501 51.7522 84.3171 51.0612 86.0321 51.2189C87.9289 51.3947 89.4759 53.0503 89.5199 55.0654C89.5319 55.6006 89.5399 55.8143 89.5439 55.8642V56.1518C89.5439 57.1763 89.5439 58.069 89.5439 58.1169C89.6358 59.4131 90.4293 60.3357 91.4726 60.4076C96.4355 62.6823 90.7011 59.9683 95.652 62.2669C97.5908 63.1676 98.4143 64.7313 98.3903 66.8283C98.3883 69.1789 98.4123 71.5375 98.4083 73.892Z" fill="#956AFB" />
          <path d="M29.0378 1.45189V2.51635C29.0372 2.89985 29.1888 3.26794 29.4592 3.54006C29.7297 3.81217 30.097 3.96613 30.4809 3.96824H37.9841L26.7172 15.2079C26.6363 15.2885 26.5721 15.3842 26.5283 15.4896C26.4845 15.5949 26.4619 15.7079 26.4619 15.822C26.4619 15.9362 26.4845 16.0492 26.5283 16.1545C26.5721 16.2599 26.6363 16.3556 26.7172 16.4362L28.1803 17.8781C28.4526 18.1484 28.8208 18.3002 29.2047 18.3002C29.5885 18.3002 29.9568 18.1484 30.229 17.8781C34.3185 13.784 41.1841 6.894 41.2521 6.93394C41.2521 9.43032 41.2521 12.1084 41.2521 14.6947C41.2526 15.0794 41.406 15.4482 41.6784 15.72C41.9509 15.9919 42.3202 16.1446 42.7052 16.1446H43.8185C44.0093 16.1446 44.1983 16.107 44.3746 16.0341C44.5509 15.9611 44.711 15.8541 44.846 15.7193C44.9809 15.5845 45.0879 15.4244 45.161 15.2483C45.234 15.0721 45.2716 14.8833 45.2716 14.6927V1.45189C45.2721 1.06874 45.1208 0.700942 44.8508 0.428887C44.5808 0.156833 44.2139 0.00263846 43.8305 0L30.4809 0C30.097 0.00211259 29.7297 0.156075 29.4592 0.428187C29.1888 0.700298 29.0372 1.06839 29.0378 1.45189Z" fill="#956AFB" />
        </g>
        <defs>
          <clipPath id="clip0_114_6523">
            <rect width="102" height="102" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      <p>Use os dedos para ampliar e selecionar as opções disponíveis em verde</p>
      <Button onClick={onClose}> Entendi </Button>
    </ContainerHelp>
  );
};