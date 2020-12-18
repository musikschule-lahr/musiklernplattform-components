import React, { useState } from 'react';
import Board from 'react-trello';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import AddCircleOutlineIcon from '@iconify/icons-ion/add-circle-outline';

import TrelloComponents from './index';
import TrelloTimetableComponents from './timetable';
import IconButton from '../components/IconButton';
import Dialog from '../components/Dialog';
import DialogHeader from '../components/Dialog/DialogHeader';
import DialogBody from '../components/Dialog/DialogBody';
import TextButton from '../components/TextButton';
import Input from '../components/Input';
import MultiSelectList from '../components/MultiSelectList';

const actionsData = {
  handleDragEnd: action('handleDragEnd'),
  onDataChange: action('onDataChange'),
};

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Nachrichten',
      light: true,
      // label: '2/2',
      cards: [
        {
          id: '11',
          title: 'Frau Bühler',
          description: 'Achtung! Korrepetition ist am Mittwoch um 16 Uhr',
          messageType: 'incoming',
          date: '11:28',
        },
        {
          id: '12',
          title: 'Du',
          description: 'Ah danke 👍',
          messageType: 'outgoing',
          date: '11:29',
        },
        {
          id: '13',
          title: 'Du',
          description: 'Wann ist am kommenden Samstag der Auftritt?',
          messageType: 'outgoing',
          date: '16:20',
        },
        {
          id: '14',
          title: 'Sinfonieorchester',
          description: 'Bitte vergesst nicht die Klaviernoten zu Romanza Andaluza zu kopieren und am Samstag mitzubringen. Treffpunkt ist um 18 Uhr.',
          messageType: 'incoming',
          date: '17:07',
        },
        {
          id: '15',
          title: 'Du',
          description: 'Was ist nochmal am Samstag?',
          messageType: 'outgoing',
          date: '18:28',
        },
      ],
    },
    {
      id: 'lane2',
      title: 'To Do',
      // label: '0/0',
      cards: [
        {
          id: '21',
          description: 'Romanza Andaluza, Opus 22 Nr. 1 üben, Notenblätter anbei',
          attachementCount: 2,
          author: 'Frau Bühler',
          date: '24.01.2020',
        },
        {
          id: '22',
          description: 'Violine-Tutorial anschauen und nachspielen',
          attachementCount: 1,
          author: 'Frau Bühler',
          date: '20.01.2020',
        },
        {
          id: '23',
          description: 'Technikübung Nr. 19 aus Übungsheft „Gesang“',
          author: 'Herr Schmidt',
          date: '17.12.2019',
        },
      ],
    },
    {
      id: 'lane3',
      title: 'Erledigt',
      disallowAddingCard: true,
      cards: [
        {
          id: '31',
          description: 'Romanza Andaluza, Opus 22 Nr. 2 üben',
          attachementCount: 1,
          author: 'Frau Bühler',
          date: '12.02.2020',
        },
      ],
    },
  ],
};

export default {
  component: Board,
  title: 'react-trello',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  function handleDragEnd(cardId, sourceLaneId, targetLaneId, position, cardDetails) {
    actionsData.handleDragEnd({
      cardId,
      sourceLaneId,
      targetLaneId,
      position,
      cardDetails,
    });
  }

  function onDataChange(newData) {
    actionsData.onDataChange(newData);
  }

  return (
    <Board
      data={data}
      editable={boolean('Editable', true)}
      components={TrelloComponents}
      handleDragEnd={handleDragEnd}
      onDataChange={onDataChange}
    />
  );
};

export const Timetable = () => {
  const contactListItems = [
    { key: 1, value: 'Marius Schäfer' },
    { key: 2, value: 'Chor' },
    { key: 3, value: 'Brass Band' },
    { key: 4, value: 'Frau Müller' },
  ];

  const [showTimetableForm, setShowTimetableForm] = useState({ show: false, laneId: null });
  const [time, setTime] = useState('');
  const [options, setOptions] = useState(contactListItems);

  const getLaneTitle = (title, laneId) => (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
      {title}
      <IconButton
        icon={AddCircleOutlineIcon}
        onClickHandler={() => setShowTimetableForm({ show: true, laneId })}
      />
    </div>
  );

  const initialDataTimetable = {
    lanes: [
      {
        id: 1,
        title: getLaneTitle('Montag', 1),
        cards: [
          {
            id: 1,
            title: '12:00',
            description: 'Chor',
          },
          {
            id: 2,
            title: '13:00',
            description: 'Marius Schäfer',
          },
          {
            id: 3,
            title: '15:00',
            description: 'Pauline Schmidt',
            timetableActive: true,
          },
          {
            id: 4,
            title: '17:30',
            description: 'Brass Band',
          },
        ],
      },
      {
        id: 2,
        title: getLaneTitle('Dienstag', 2),
        cards: [],
      },
      {
        id: 3,
        title: getLaneTitle('Mittwoch', 3),
        cards: [],
      },
      {
        id: 4,
        title: getLaneTitle('Donnerstag', 4),
        cards: [],
      },
      {
        id: 5,
        title: getLaneTitle('Freitag', 5),
        cards: [],
      },
    ],
  };

  const [dataTimetable, setDataTimetable] = useState(initialDataTimetable);

  function onTimeInputChangeHandler(_time) {
    setTime(_time);
  }

  function onTimeClearHandler() {
    setTime('');
  }

  function onChangeHandler(key) {
    setOptions(options.map((option) => ({
      ...option,
      selected: option.key === key,
    })));
  }

  function addTimetableEntry() {
    const selectedOption = options.find((option) => option.selected);
    const newData = { ...dataTimetable };
    newData.lanes.forEach((lane) => {
      if (lane.id === showTimetableForm.laneId) {
        lane.cards.push({
          title: time,
          description: selectedOption && selectedOption.value,
        });
      }
    });
    setDataTimetable(newData);
    setShowTimetableForm({ show: false, laneId: null });
  }

  return (
    <div>
      <Board
        data={dataTimetable}
        components={TrelloTimetableComponents}
      />
      {showTimetableForm.show && (
        <Dialog onClose={() => setShowTimetableForm({ show: false, laneId: null })}>
          <DialogHeader>
            <h4>Schüler/Gruppe hinzufügen</h4>
            <TextButton title="Fertig" onClickHandler={addTimetableEntry} />
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
            <MultiSelectList onChangeHandler={onChangeHandler} options={options} />
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

const dataCardDefault = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      cards: [
        {
          id: 1,
          description: 'Default Card',
        },
      ],
    },
  ],
};

export const CardDefault = () => (
  <Board data={dataCardDefault} components={TrelloComponents} />
);

const dataCardWithTitle = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      cards: [
        {
          id: 1,
          description: 'Lorem ipsum...',
          title: 'Title',
        },
      ],
    },
  ],
};

export const CardWithTitle = () => (
  <Board data={dataCardWithTitle} components={TrelloComponents} />
);

const dataCardWithFooter = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      cards: [
        {
          id: 1,
          description: 'Default Card',
          attachementCount: 1,
          author: 'Frau Bühler',
          date: '12.02.2020',
        },
      ],
    },
  ],
};

export const CardWithFooter = () => (
  <Board data={dataCardWithFooter} components={TrelloComponents} />
);

const dataCardAsMessageIncoming = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      light: true,
      cards: [
        {
          id: 1,
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing...',
          messageType: 'incoming',
        },
      ],
    },
  ],
};

export const CardAsMessageIncoming = () => (
  <Board data={dataCardAsMessageIncoming} components={TrelloComponents} />
);

const dataCardAsMessageOutgoing = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      light: true,
      cards: [
        {
          id: 1,
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing...',
          messageType: 'outgoing',
        },
      ],
    },
  ],
};

export const CardAsMessageOutgoing = () => (
  <Board data={dataCardAsMessageOutgoing} components={TrelloComponents} />
);

const dataChatCardWithBadge = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      cards: [
        {
          id: 1,
          title: 'Marius Schäfer',
          badge: 1,
          badgePosition: 'inline',
        },
      ],
    },
  ],
};

export const CardAsChatWithBadge = () => (
  <Board data={dataChatCardWithBadge} components={TrelloComponents} />
);

const dataChatCardWithBadgeOutline = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      cards: [
        {
          id: 1,
          title: 'Marius Schäfer',
          badge: 1,
          badgePosition: 'outline',
        },
      ],
    },
  ],
};

export const CardAsChatWithBadgeOutline = () => (
  <Board data={dataChatCardWithBadgeOutline} components={TrelloComponents} />
);

const dataGroupChatCardWithBadge = {
  lanes: [
    {
      id: 1,
      title: 'Lane',
      cards: [
        {
          id: 1,
          title: 'Brass Band',
          badge: 12,
          badgePosition: 'inline',
          group: true,
        },
      ],
    },
  ],
};

export const CardAsGroupChatWithBadge = () => (
  <Board data={dataGroupChatCardWithBadge} components={TrelloComponents} />
);
