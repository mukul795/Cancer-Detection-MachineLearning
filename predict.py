import sys
import json
import joblib
import pandas as pd

model = joblib.load('cancer_model.pkl')

input_data = json.loads(sys.stdin.read())

# Define feature order
features = ['mean radius', 'mean texture', 'mean perimeter', 'mean area', 'mean smoothness']

X = pd.DataFrame([input_data], columns=features)

prediction = model.predict(X)[0]

# Output
print(json.dumps({"prediction": int(prediction)}))
