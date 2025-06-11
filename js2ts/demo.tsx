import intl from '../../base/i18n';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Row, Button } from 'antd';
import _ from 'lodash';
import cx from 'classnames';
import { SvgIcon } from '../SvgIcon';
import './index.less';

export default class MultiLine extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    minLength: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.any,
      }),
    ),
    renderLine: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    addText: PropTypes.string,
    gap: PropTypes.node,
    shouldScroll: PropTypes.bool,
  };

  static defaultProps = {
    minLength: 1,
    items: [],
    renderLine: (v) => JSON.stringify(v),
    addText: intl.get('添加条件'),
    gap: null,
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.shouldScroll &&
      _.size(prevProps.items) < _.size(this.props.items)
    ) {
      const $dom = ReactDOM.findDOMNode(this);
      if ($dom) {
        const $line = $dom.querySelector('.line:last-child');
        if ($line) {
          $line.scrollIntoView(false);
        }
      }
    }
  }

  onDelete = (i) => () => this.props.onDelete(i);

  render() {
    const items = this.props.items.map((item, i, lines) => {
      const o = [
        <Row key={i} type="flex" className="line">
          <div className="main">{this.props.renderLine(item, i)}</div>
          <div className="operator">
            {lines.length > this.props.minLength ? (
              <div className="icon" onClick={this.onDelete(i)}>
                <SvgIcon type="icon-delete" size={14} />
              </div>
            ) : null}
          </div>
        </Row>,
      ];

      if (this.props.gap && i < lines.length - 1) {
        o.push(
          <Row key={`${i}-gap`} className="gap">
            {this.props.gap}
          </Row>,
        );
      }
      return o;
    });
    const cls = cx('component-multi-line', this.props.className);

    return (
      <div className={cls}>
        <div className="lines">{_.flatten(items)}</div>
        {this.props.onAdd ? (
          <Button icon={<PlusOutlined />} onClick={this.props.onAdd}>
            {this.props.addText}
          </Button>
        ) : null}
      </div>
    );
  }
}
