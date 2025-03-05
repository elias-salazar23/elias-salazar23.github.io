// This file contains the JavaScript code for assisting nurses in administering medications based on patients' diseases.

document.addEventListener('DOMContentLoaded', () => {
    const diseaseInput = document.getElementById('disease-input');
    const medicationOutput = document.getElementById('medication-output');
    const submitButton = document.getElementById('submit-button');

    const medicationDatabase = {
        'diabetes': ['Insulin', 'Metformin'],
        'hypertension': ['Lisinopril', 'Amlodipine'],
        'asthma': ['Albuterol', 'Fluticasone'],
        'heart disease': ['Aspirin', 'Beta-blockers'],
        'depression': ['Sertraline', 'Citalopram']
    };

    submitButton.addEventListener('click', () => {
        const disease = diseaseInput.value.toLowerCase();
        const medications = medicationDatabase[disease];

        if (medications) {
            medicationOutput.innerHTML = `Recommended medications for ${disease.charAt(0).toUpperCase() + disease.slice(1)}: ${medications.join(', ')}`;
        } else {
            medicationOutput.innerHTML = 'No medications found for this disease. Please check the input.';
        }
    });
});

document.getElementById('patient-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientDisease = document.getElementById('patient-disease').value.toLowerCase();
    const medicationResults = document.getElementById('medication-results');
    
    const medications = {
        'diabetes': ['Metformina', 'Insulina', 'Glipizida'],
        'hipertensión': ['Lisinopril', 'Amlodipino', 'Losartán'],
        'asma': ['Salbutamol', 'Budesonida', 'Montelukast'],
        'dolor de cabeza': ['Paracetamol', 'Ibuprofeno', 'Aspirina'],
        'calentura': ['Paracetamol', 'Ibuprofeno', 'Dipirona']
        // Agrega más enfermedades y medicamentos aquí
    };

    const healthTips = {
        'diabetes': ['Mantén una dieta equilibrada', 'Haz ejercicio regularmente', 'Monitorea tus niveles de glucosa'],
        'hipertensión': ['Reduce el consumo de sal', 'Practica técnicas de relajación', 'Haz ejercicio regularmente'],
        'asma': ['Evita los desencadenantes', 'Usa tu inhalador según las indicaciones', 'Mantén un ambiente limpio'],
        'dolor de cabeza': ['Descansa en un lugar oscuro y tranquilo', 'Aplica compresas frías o calientes', 'Mantén una buena hidratación'],
        'calentura': ['Descansa lo suficiente', 'Mantén una buena hidratación', 'Usa ropa ligera']
        // Agrega más consejos de salud aquí
    };
    
    medicationResults.innerHTML = '';
    
    if (medications[patientDisease]) {
        const meds = medications[patientDisease];
        const tips = healthTips[patientDisease];
        medicationResults.innerHTML = `
            <h3>Medicamentos recomendados para ${patientDisease}:</h3>
            <ul>${meds.map(med => `<li>${med}</li>`).join('')}</ul>
            <h3>Consejos de salud para ${patientDisease}:</h3>
            <ul>${tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
        `;
    } else {
        medicationResults.innerHTML = `<p>No se encontraron medicamentos recomendados para la enfermedad: ${patientDisease}</p>`;
    }
});