# Action for ideckia: Counter

## Definition

A simple counter

## Properties

| Name | Type | Default | Description | Possible values |
| ----- |----- | ----- | ----- | ----- |
| initial | Int | 0 | Initial value | null |
| increment | Int | 1 | Increment number | null |

## Example in layout file

```json
{
    "state": {
        "text": "action_counter project",
        "bgColor": "00ff00",
        "action": {
            "name": "counter",
            "props": {
                "initial": 10,
                "increment": -1
            }
        }
    }
}
```