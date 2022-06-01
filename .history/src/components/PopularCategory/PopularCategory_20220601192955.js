import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { categoryList } from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './PopularCategory.module.scss';

const cx = classNames.bind(styles);

function PopularCategory() {
    return (
        <div className={cx('popular-category')}>
            <h2 className={cx('header-category')}>Popular Category</h2>
            <div className={cx('category-list')}>
                {categoryList.map(
                    (item) =>
                        item.title && (
                            <CardItem
                                className={item.color}
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default PopularCategory;
