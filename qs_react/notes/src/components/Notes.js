import React, { Component } from 'react'
import { loadCollection , db } from '../database'
import Note from './Note'
class Notes extends Component {
  constructor(props) {
    super(props);
    this.getInitialData();
  }
  getInitialData() {
    loadCollection('notes')
      .then( collection => {
        const entities = collection.chain().find()  //查找数据
        .simplesort('$loki', 'isdesc')
        .data();
        this.setState({
          entities: entities
        })
      })
  }
  state = {
    entities : []
  }
  destroyEntity (){
    console.log('destroy');
  }
  render() {
    const entities = this.state.entities;
    const noteItems = entities.map((entity) => {
      return (
        <Note 
          key = {entity.$loki}
          entity = {entity}
          destroyEntity = {this.destroyEntity}
        />
      )
    });
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button" onClick={this.createEntity}>添加笔记</button>
        <div className="ui divided items">
          { noteItems }
          { !entities.length &&
            <span className="ui small disabled header">
              还没有笔记，请按下‘添加笔记’按钮
            </span>
          }
        </div>
      </div>
    );
  }
  createEntity = () => {
    // 操作的句柄
    loadCollection('notes')
    .then(collection => {
      const entity = collection.insert({
        body: ''
      });
      db.saveDatabase();
      this.setState((prevState) => {
        const _entities = prevState.entities;
        _entities.unshift(entity);
        return {
          entities: _entities
        }
      });
    })
  }
}
export default Notes;
