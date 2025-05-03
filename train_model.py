from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import RandomForestClassifier
import joblib
import pandas as pd

# Load dataset
data = load_breast_cancer()
X_full = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

# Select only 5 features
selected_features = ['mean radius', 'mean texture', 'mean perimeter', 'mean area', 'mean smoothness']
X = X_full[selected_features]

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, 'cancer_model.pkl')
print("Model trained and saved as 'cancer_model.pkl'")
