import React from 'react';
import classNames from 'classnames/bind';

import styles from './Topics.module.scss';
import { categoryList } from '../../data/data';
import CardItem from '../CardItem/CardItem';

const cx = classNames.bind(styles);

function Topics({ active }) {
    return (
        <div className={cx('topics')}>
            {categoryList.map(
                (item) =>
                    item.id === active && (
                        <CardItem
                            color={item.color}
                            className={cx('topics-item')}
                            key={item.data.idDta}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                        />
                    )
            )}
        </div>
    );
}

export default Topics;
