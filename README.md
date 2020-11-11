# en-he-date-translation

The purpose of this package is to allow you to write code that is shorter & more readable when using dates that you want to show in Hebrew or to Israeli users.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation
```npm i heb-dates-helper```

## Usage

First, import the package or the function that you want to use:

```
import * as heDatesHelper from 'heb-dates-helper'; 

// or

import {dateToVerbal, dateToNumeric, ...} from 'heb-dates-helper'

```

Then simply use the function:

```
dateToNumeric('12/20/2020') // '20/12/2020'
dateToVerbal('12/20/2020') //  תוצאה: 20 בדצמבר 2020
heDateToVerbal('20/12'2020') //  תוצאה: 20 בדצמבר 2020
heToDate('20/12/2020') // Sun Dec 20 2020 00:00:00 GMT+0200 ... (Date obj)
heToEn('20/12'2020') // '12/20/2020'

// You can pass either a date or a string
dateToNumeric(new Date('12/20/2020')) // '20/12/2020'
dateToVerbal(new Date('12/20/2020')) //  תוצאה: 20 בדצמבר 2020
```

Keep in mind that the word 'תוצאה:' was added for formatting purposes in this documentation alone, and the result of the function with the verbal argument will be solely what comes after it.
# he-dates-helper
