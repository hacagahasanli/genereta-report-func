import log from './src/util/logger.js';

import { generateReportData, storeData } from './src/data.js';

const data = generateReportData(log);

storeData(data);