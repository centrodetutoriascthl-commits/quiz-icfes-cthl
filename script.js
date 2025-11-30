// 🚨🚨🚨 DATOS DE CONEXIÓN ACTUALIZADOS 🚨🚨🚨

// 1. URL GENERADA EN GOOGLE APPS SCRIPT
const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwIL-uKMn5Xzzs_BFMGtdT-nj91STogWXkf5LOrkbFhLf7Q0I1fFh9Sbe5BM0hFYmFYaQ/exec';

// 2. NÚMERO DE WHATSAPP (573045582718)
const WHATSAPP_NUMBER = '573045582718'; 

// 3. ENLACES DE YOUTUBE (Usamos el general como temporal)
const GENERAL_VIDEO_URL = 'https://youtube.com/watch?v=HhpiFvGjXKU&si=Urs85z45ab7zl1QP';

const VIDEO_LINKS = {
    lc: GENERAL_VIDEO_URL, 
    mat: GENERAL_VIDEO_URL,
    cn: GENERAL_VIDEO_URL,
    soc: GENERAL_VIDEO_URL,
    eng: GENERAL_VIDEO_URL,
};
// -------------------------------------------------------------

const CTA_MESSAGE = 'Hola CTHL SAS, acabo de completar el Analizador ICFES 4.0 y obtuve mi diagnóstico. ¡Quiero mi plan de estudio personalizado AHORA!';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CTA_MESSAGE)}`;


// --- DEFINICIÓN DE RESPUESTAS Y ÁREAS (NO MODIFICAR) ---

const correctAnswers = {
    q1: 'D', q2: 'C', q3: 'C', q4: 'B', q5: 'C', 
    q6: 'C', q7: 'C', q8: 'B', q9: 'B', q10: 'C', 
    q11: 'B', q12: 'D', q13: 'C', q14: 'A', q15: 'B', 
    q16: 'C', q17: 'C', q18: 'A', q19: 'B', q20: 'C', 
    q21: 'B', q22: 'C', q23: 'A', q24: 'D', q25: 'C', 
};

const qPerArea = {
    q1: 'lc', q2: 'lc', q3: 'lc', q4: 'lc', q5: 'lc', 
    q6: 'mat', q7: 'mat', q8: 'mat', q9: 'mat', q10: 'mat', 
    q11: 'cn', q12: 'cn', q13: 'cn', q14: 'cn', q15: 'cn', 
    q16: 'soc', q17: 'soc', q18: 'soc', q19: 'soc', q20: 'soc', 
    q21: 'eng', q22: 'eng', q23: 'a', q24: 'd', q25: 'c', 
};

const areaNames = { lc: 'Lectura Crítica', mat: 'Matemáticas', cn: 'Ciencias Naturales', soc: 'Sociales y Ciudadanas', eng: 'Inglés' };

const icfesActionPlans = {
    lc: { 
        nd1: { competency: 'Identificación de Elementos Explícitos (Nivel Literal)', intro: '🔴 **DIAGNÓSTICO CRÍTICO:** Se detectan **Deficiencias Conceptuales Graves** en:', action: 'Debes enfocarte en reconocer la **tesis principal** y la **función de los conectores lógicos**.' },
        nd2: { competency: 'Comprensión de Ideas Globales y Relaciones entre Partes (Nivel Inferencial)', intro: '🟠 **DIAGNÓSTICO DE ENFOQUE:** Existe una **Oportunidad de Fortalecimiento** en la competencia:', action: 'Tu reto es la **inferencia y el resumen de ideas secundarias**.' },
        nd3: { competency: 'Reflexión y Evaluación del Contenido (Nivel Crítico/Intertextual)', intro: '🟢 **DIAGNÓSTICO AVANZADO:** El reto para alcanzar el puntaje ideal es la competencia:', action: 'Para la perfección, fortalece la **evaluación de argumentos y la intertextualidad**.' }
    },
    mat: { 
        nd1: { competency: 'Formulación y Ejecución (Conceptos y Procedimientos Básicos)', intro: '🔴 **DIAGNÓSTICO CRÍTICO:** Se detectan **Deficiencias Conceptuales Graves** en:', action: 'Necesitas revisar las **habilidades de cálculo, unidades de medida y notación científica**.' },
        nd2: { competency: 'Interpretación y Representación (Análisis de Tablas, Gráficos y Fórmulas)', intro: '🟠 **DIAGNÓSTICO DE ENFOQUE:** Existe una **Oportunidad de Fortalecimiento** en la competencia:', action: 'Tu área de mejora es **traducir problemas textuales a expresiones algebraicas y leer gráficos**.' },
        nd3: { competency: 'Argumentación (Justificación de Estrategias y Modelación Matemática)', intro: '🟢 **DIAGNÓSTICO AVANZADO:** El reto para alcanzar el puntaje ideal es la competencia:', action: 'El foco es la **justificación de procedimientos estadísticos y la validez de las conclusiones**.' }
    },
    cn: {
        nd1: { competency: 'Uso Comprensivo del Conocimiento Científico (Reconocimiento de Conceptos Fundamentales)', intro: '🔴 **DIAGNÓSTICO CRÍTICO:** Se detectan **Deficiencias Conceptuales Graves** en:', action: 'Urge asegurar las **bases conceptuales de Biología, Química y Física**.' },
        nd2: { competency: 'Explicación de Fenómenos (Aplicar Teorías a Situaciones Concretas)', intro: '🟠 **DIAGNÓSTICO DE ENFOQUE:** Existe una **Oportunidad de Fortalecimiento** en la competencia:', action: 'Tu debilidad es **aplicar conceptos abstractos a ejemplos reales o experimentales**.' },
        nd3: { competency: 'Indagación Científica (Diseño de Experimentos y Análisis de Evidencia)', intro: '🟢 **DIAGNÓSTICO AVANZADO:** El reto para alcanzar el puntaje ideal es la competencia:', action: 'Para el nivel avanzado, perfecciona el **diseño de experimentos, identificación de variables y análisis de resultados**.' }
    },
    soc: {
        nd1: { competency: 'Pensamiento Social (Reconocimiento de Conceptos y Eventos Históricos/Geográficos)', intro: '🔴 **DIAGNÓSTICO CRÍTICO:** Se detectan **Deficiencias Conceptuales Graves** en:', action: 'Urge estudiar los **conceptos clave de Geografía, Historia y los pilares del Estado de Derecho en Colombia**.' },
        nd2: { competency: 'Interpretación de Perspectivas (Análisis de Causas y Consecuencias en Multiperspectiva)', intro: '🟠 **DIAGNÓSTICO DE ENFOQUE:** Existe una **Oportunidad de Fortalecimiento** en la competencia:', action: 'Tu desafío es **analizar conflictos desde múltiples puntos de vista y entender el rol de los actores sociales**.' },
        nd3: { competency: 'Argumentación y Análisis Crítico (Evaluación de Conflictos y Propuestas de Solución)', intro: '🟢 **DIAGNÓSTICO AVANZADO:** El reto para alcanzar el puntaje ideal es la competencia:', action: 'El último paso es **evaluar la validez y la pertinencia de las soluciones a problemas sociales y económicos**.' }
    },
    eng: {
        nd1: { competency: 'Nivel A1 (Vocabulario y Gramática Básica)', intro: '🔴 **DIAGNÓSTICO CRÍTICO:** Se detectan **Deficiencias Conceptuales Graves** en:', action: 'Debes construir tu **base de vocabulario y verbos en presente simple**.' },
        nd2: { competency: 'Nivel A2 (Comprensión de Textos Cortos y Conectores)', intro: '🟠 **DIAGNÓSTICO DE ENFOQUE:** Existe una **Oportunidad de Fortalecimiento** en la competencia:', action: 'Tu enfoque debe ser en la **lectura de textos informativos y el uso de conectores lógicos (but, so, although)**.' },
        nd3: { competency: 'Nivel B1 (Inferencia y Comprensión Detallada)', intro: '🟢 **DIAGNÓSTICO AVANZADO:** El reto para alcanzar el puntaje ideal es la competencia:', action: 'Para el puntaje alto, perfecciona la **comprensión de implicaciones y el uso de condicionales (If I were...)**.' }
    }
};

/**
 * Función que realiza el diagnóstico para un área específica.
 * @param {string} areaCode - Código del área (ej: 'lc', 'mat').
 * @param {number} score - Puntaje obtenido en el área (0 a 5).
 * @returns {object} Objeto con el diagnóstico (ND, color, descripción, etc.).
 */
function diagnoseArea(areaCode, score) {
    const areaName = areaNames[areaCode];
    let diagnosis = {};

    const colors = {
        alerta: '#dc3545',     
        advertencia: '#ffc107', 
        exito: '#1e7e34'       
    };
    
    let plan = {};

    // 🌟 Lógica corregida para el diagnóstico
    if (score <= 1) { 
        plan = icfesActionPlans[areaCode].nd1;
        diagnosis.nd = 'ND 1 (Bajo)';
        diagnosis.color = colors.alerta; 
        diagnosis.description = `<p><strong style="color:${colors.alerta};">${plan.intro}</strong> ${plan.competency}.</p> <p><strong>Plan de Acción CTHL SAS:</strong> ${plan.action}</p>`;
        diagnosis.weakness = plan.competency;
    } else if (score <= 3) { 
        plan = icfesActionPlans[areaCode].nd2;
        diagnosis.nd = 'ND 2 (Intermedio)';
        diagnosis.color = colors.advertencia; 
        diagnosis.description = `<p><strong style="color:${colors.advertencia};">${plan.intro}</strong> ${plan.competency}.</p> <p><strong>Plan de Acción CTHL SAS:</strong> ${plan.action}</p>`;
        diagnosis.weakness = plan.competency;
    } else { // Esto captura scores de 4 y 5 (Avanzado), utilizando el plan nd3
        plan = icfesActionPlans[areaCode].nd3;
        diagnosis.nd = 'ND 3/4 (Avanzado)';
        diagnosis.color = colors.exito; 
        diagnosis.description = `<p><strong style="color:${colors.exito};">${plan.intro}</strong> ${plan.competency}.</p> <p><strong>Plan de Acción CTHL SAS:</strong> ${plan.action}</p>`;
        diagnosis.weakness = plan.competency;
    }
    
    diagnosis.score = score;
    return diagnosis;
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentPhone = document.getElementById('studentPhone').value;

    if (!studentName || !studentEmail || !studentPhone) {
        alert("🚨 ERROR: Por favor, completa tus datos de Nombre, Correo y Celular para poder enviarte el diagnóstico completo.");
        return; 
    }

    let unansweredQuestions = 0;
    let allAnswers = {};
    for (const qId in correctAnswers) {
        const userAnswerElement = document.querySelector(`input[name="${qId}"]:checked`);
        if (!userAnswerElement) {
            unansweredQuestions++;
        } else {
            allAnswers[qId] = userAnswerElement.value;
        }
    }

    if (unansweredQuestions > 0) {
        alert(`🚨 ¡Alto! Debes responder las 25 preguntas para obtener tu diagnóstico. Te faltan ${unansweredQuestions} preguntas por responder.`);
        return; 
    }
    
    // CALIFICACIÓN Y DIAGNÓSTICO
    let areaScores = { lc: 0, mat: 0, cn: 0, soc: 0, eng: 0 };
    let lowestScore = 6; 
    let mainWeaknessAreaCode = ''; 

    for (const qId in correctAnswers) {
        if (allAnswers[qId] === correctAnswers[qId]) {
            areaScores[qPerArea[qId]]++; 
        }
    }

    let allDiagnoses = {};
    for (const areaCode in areaScores) {
        const diagnosis = diagnoseArea(areaCode, areaScores[areaCode]);
        allDiagnoses[areaCode] = diagnosis;

        // Se usa < para encontrar la puntuación más baja
        if (diagnosis.score < lowestScore) { 
            lowestScore = diagnosis.score;
            mainWeaknessAreaCode = areaCode;
        }
    }
    
    // 3. PREPARAR ENVÍO DE DATOS
    const formData = new FormData();
    formData.append('nombre', studentName);
    formData.append('email', studentEmail);
    formData.append('telefono', studentPhone);
    formData.append('respuestas', JSON.stringify(allAnswers)); 
    formData.append('diagnostico', areaNames[mainWeaknessAreaCode]); 
    formData.append('puntaje_lc', areaScores.lc);
    formData.append('puntaje_mat', areaScores.mat);
    formData.append('puntaje_cn', areaScores.cn);
    formData.append('puntaje_soc', areaScores.soc);
    formData.append('puntaje_eng', areaScores.eng);

    // Feedback visual mientras se envía (CRUCIAL para no confundir al usuario)
    const submitButton = document.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Enviando diagnóstico... Por favor espera.';
    submitButton.disabled = true;

    // ENVÍO ASÍNCRONO
    fetch(GOOGLE_APP_SCRIPT_URL, {
        method: 'POST',
        body: formData, 
    })
    .then(response => {
        // No es necesario verificar el JSON aquí, solo garantizar que la conexión se intentó
    })
    .catch(error => {
        console.error('Error de conexión o de red con Apps Script:', error);
    })
    .finally(() => {
        // --- MOSTRAR RESULTADOS (Se ejecuta sin importar el éxito del envío del lead) ---
        
        // 4. Configurar CTAs
        const mainWeaknessAreaName = areaNames[mainWeaknessAreaCode];
        document.getElementById('report-name').textContent = studentName;
        document.getElementById('main-weakness').textContent = mainWeaknessAreaName; 
        
        // Ajustar el link del video según la debilidad
        document.getElementById('cta-video').href = VIDEO_LINKS[mainWeaknessAreaCode];
        
        // Ajustar el link de WhatsApp
        document.getElementById('cta-course').href = WHATSAPP_LINK;

        // 5. Renderizar Diagnósticos
        for (const areaCode in allDiagnoses) {
            const d = allDiagnoses[areaCode];
            document.getElementById(`${areaCode}-diagnose`).innerHTML = 
                `<div class="diagnose-area-item"><p style="font-weight: bold; margin-bottom: 5px;">${areaNames[areaCode]} (${d.score}/5): ${d.nd}</p>${d.description}</div>`;
        }

        // 6. Mostrar el reporte y desplazamiento
        document.getElementById('quizForm').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        
        // Restaurar el botón (opcional ya que se oculta la sección, pero buena práctica)
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });

});
