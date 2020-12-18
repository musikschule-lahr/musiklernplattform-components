import React, { useState } from 'react';

import ForwardIcon from '@iconify/icons-ion/chevron-forward-outline';

import Dialog from './index';
import Button from '../Button';
import TextButton from '../TextButton';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';
import Input from '../Input';
import List from '../List';
import ListDivider from '../List/ListDivider';
import ListItem from '../List/ListItem';

export default {
  component: Dialog,
  title: 'Dialog',
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [time, setTime] = useState('');

  function onClickHandler() {
    setDialogOpen((prevState) => !prevState);
  }

  function onClose() {
    setDialogOpen(false);
  }

  function onTimeInputChangeHandler(_time) {
    setTime(_time);
  }

  function onTimeClearHandler() {
    setTime('');
  }

  return (
    <div>
      <Button title="Open Dialog" onClickHandler={onClickHandler} />
      {dialogOpen && (
        <Dialog onClose={onClose}>
          <DialogHeader>
            <h3>Schüler/Gruppe hinzufügen</h3>
            <TextButton title="Fertig" onClickHandler={onClose} />
          </DialogHeader>
          <DialogBody>
            <div style={{ padding: '16px 16px 0' }}>
              <label>
                Montag: Uhrzeit eingeben
                <br />
                <Input
                  type="time"
                  clearButton
                  value={time}
                  onChangeHandler={onTimeInputChangeHandler}
                  onClearHandler={onTimeClearHandler}
                />
              </label>
              <p>Schüler/Gruppe auswählen</p>
            </div>
            <List>
              <ListDivider label="B" />
              <ListItem icon={ForwardIcon}>Brass Band</ListItem>
              <ListDivider label="C" />
              <ListItem icon={ForwardIcon}>Chor</ListItem>
              <ListDivider label="H" />
              <ListItem icon={ForwardIcon}>Herr Müller</ListItem>
              <ListDivider label="K" />
              <ListItem icon={ForwardIcon}>Kevin Schnurr</ListItem>
              <ListDivider label="M" />
              <ListItem icon={ForwardIcon}>Marius Schäfer</ListItem>
              <ListDivider label="L" />
              <ListItem icon={ForwardIcon}>Leander Hausmann</ListItem>
              <ListItem icon={ForwardIcon}>Linus Schneider</ListItem>
            </List>
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};
