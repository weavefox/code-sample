import React from 'react';
import { Button } from 'antd';
import { StarOutlined, ClockCircleOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const MyComponent1: React.FC = () => {
  const onButtonClick = () => {};

  return (
    <div className={styles.clsDiv}>
      <div className={styles.clsDiv2}>
        <img
          alt=""
          src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
          className={styles.clsImage}
        />
        <span className={styles.clsSpan}>Hi!你好</span>
        <div className={styles.clsDiv3}>
          <div className={styles.clsDiv4}>
            <img
              alt=""
              src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
              className={styles.clsImage2}
            />
            <img
              alt=""
              src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
              className={styles.clsImage3}
            />
          </div>
          <Button
            shape="round"
            onClick={onButtonClick}
            className={styles.clsButton}
          >
            开店
          </Button>
        </div>
        <div className={styles.clsDiv5}>
          <StarOutlined className={styles.clsIcon} />
          <img
            alt=""
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            className={styles.clsImage4}
          />
          <img
            alt=""
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            className={styles.clsImage5}
          />
          <ClockCircleOutlined className={styles.clsIcon} />
        </div>
        <div className={styles.clsDiv6}>
          <span className={styles.clsSpan2}>宝贝收藏</span>
          <span className={styles.clsSpan2}>买过的店</span>
          <span className={styles.clsSpan2}>收藏的店</span>
          <span className={styles.clsSpan2}>我的足迹</span>
        </div>
      </div>
    </div>
  );
};

export default MyComponent1;
