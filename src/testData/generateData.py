import json
import numpy as np
from datetime import datetime

data = []
for i in range(100):
    buffer = {
        'id': i,
        'name': f'kitti{i}',
        'amount': np.random.randint(-1000, 1000),
        'type': np.random.randint(0, 2),
        'date': f'{datetime.now():%Y-%m-%dT%H:%M:%S.%f}'
    }
    data.append(buffer)
print(json.dump(data, open('dataG.json', 'w')))
