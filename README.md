# Action for ideckia: Counter

## Definition

A simple counter

## Properties

| Name | Type | Description | Shared | Default | Possible values |
| ----- |----- | ----- |----- | ----- | ----- |
| text | String | Text shown with the value | false | "" | null |
| initial | Int | Initial value | false | 0 | null |
| increment | Int | Increment number | false | 1 | null |

## Example in layout file

```json
{
    "state": {
        "text": "action_counter project",
        "bgColor": "00ff00",
        "actions": [
            {
                "name": "counter",
                "props": {
                    "text": "",
                    "initial": 10,
                    "increment": -1
                }
            }
        ]
    }
}
```