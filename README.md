# musiklernplattform-components

## Documentation

#### Modal

The Modal component is a wrapper for rendering children outside of their parent component. This allows components
like Dialog to be rendered directly as a child in the documents body.

For this to work, Modal expects a predefined DOM element with id `#modal-root`, which should be a sibling of your main `#root` or `#app` container defined in `index.html`.

#### Scrollbar Styling

```css
body {
    background: rgba(37, 37, 37, 1);
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, .3) transparent;
}
::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .3);
}
```

#### react-trello dependency injection

For every kanban board you instantiate, inject customized react-trello components.

Default is `TrelloComponents`. For timetable boards, use `TrelloTimetableComponents`.

```jsx
import Board from 'react-trello';
import { TrelloComponents } from 'musiklernplattform-components';

...

<Board ... components={TrelloComponents} />
```

##### Kanban Board data API

```json
{
  "lanes": [
    {
      "id": "<lane_id>",
      "title": "<lane_title>",
      "label": "<lane_label>",
      "style": "<lane_custom_style>",
      "light": "true|false", // light lane, default: false
      "disallowAddingCard": "true|false", // remove AddCardLink, default: false
      "cards": [
        {
          "id": "<card_id>",
          "title": "<card_title>",
          "label": "<card_label>",
          "description": "<card_description>",
          "cardStyle": "<card_custom_style>",
          "messageType": "none|incoming|outgoing", // define card as incoming/outgoing message, default: none
          "group": false, // display card as group chat
          "timetableActive": false, // timetable entry is active (blue)
          "date": "<card_date>", // date as string
          "author": "<card_author>", // card author
          "attachementCount": "<card_attachement_count>", // number representing the amount of attachements for this card, default: 0
          "metadata": {
            "<key>": "<value>" // custom metadata that can be used freely, e.g. for sorting
          }
        }
      ]
    }
  ]
}
```

## Development

#### Deployment

1. Update version in `package.json`
1. Build new version with `yarn build`
1. Commit `package.json` and build files as `v1.x.x`
1. Merge into `master` branch
1. Tag master branch with version, e.g. `1.x.x`
1. When pushing make sure to push tags aswell `git push --tags`
