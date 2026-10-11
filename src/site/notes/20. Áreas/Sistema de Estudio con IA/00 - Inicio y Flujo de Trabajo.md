---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/00-inicio-y-flujo-de-trabajo/","title":"Sistema de Estudio con IA • Duilio Torres","tags":["guia","estudio-activo","workflow","ingenieria","gardenEntry"],"dg-note-properties":{"title":"Sistema de Estudio con IA • Duilio Torres","tags":["guia","estudio-activo","workflow","ingenieria","gardenEntry"]}}
---

> 👨‍💻 **Desarrollado por Duilio** • Sistema de Estudio Universitario con IA (Desarrollado específicamente para Ingeniería Mecánica, pero se ajusta a todo)
---
# 🚀 Sistema de Estudio Activo con IA: Flujo Completo

> [!NOTE] 📌 Sobre este sistema, autoría e Inteligencia Artificial
> Este sistema y su documentación fueron estructurados y redactados en gran parte con asistencia de inteligencia artificial, **a partir de mis propias ideas, metodología de estudio y experiencia directa en materias de ingeniería**. 
> 
> Todo el contenido, los prompts y los flujos de trabajo fueron **rigurosamente chequeados, probados y validados en cursadas reales**. No obstante, ninguna herramienta es infalible: contrastá siempre los resultados con el material oficial y las exigencias de tu cátedra. Lo que importa es que en el examen vas a estar solo.

---

## ⚡ Índice de Acceso Rápido

Si ya conocés el sistema y querés ir directo a una herramienta o guía puntual:

| Herramienta / Módulo                 | ¿Para qué sirve?                                           | Enlace directo                                               |
| ------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------ |
| **Fase 1: Extractor de Checklists**  | Extrae el temario atómico de la cursada sin inventar nada. | ➡️ **[[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]**                      |
| **Fase 2: Tutor Personal Cognitivo** | Estudio socrático con micro-pacing (1 consigna x turno).   | ➡️ **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]**                     |
| **Fase 3: Simulador de Exámenes**    | Genera simulacros reales con la firma de tu profesor.      | ➡️ **[[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]** |
| **Fase 4: Generador de Anki**        | Crea mazos CSV en Google AI Studio (con/sin fórmulas).     | ➡️ **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**                |
| **Infraestructura de Modelos**       | Matriz de qué IA usar según la tarea y gestión de cuotas.  | ➡️ **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**               |
| **Biblioteca de Aprendizaje**        | Los 6 libros científicos que fundamentan este sistema.     | ➡️ **[[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]**        |
| **Checklists de Autoevaluación**     | Guías para auditar cómo estudiás antes del examen.         | ➡️ **[[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]**  |
| **Historial de Versiones**           | Changelog con la evolución de prompts y decisiones.        | ➡️ **[[20. Áreas/Sistema de Estudio con IA/99 - Historial de Versiones (Changelog)\|99 - Historial de Versiones (Changelog)]]**           |

---

Este sistema no busca que la IA te haga resúmenes pasivos ni te dé respuestas servidas. Su objetivo es aplicar los principios de la **ciencia del aprendizaje** (recuperación activa, repetición espaciada, entrelazado y andamiaje cognitivo) para preparar materias técnicas de ingeniería minimizando el tiempo muerto y garantizando el estándar real de examen de la cátedra.

> [!TIP] 📌 Modelos de IA actualizados y gestión de cuotas
> Para no desactualizar esta guía con el paso del tiempo, consultá siempre la referencia rápida en:  
> ➡️ **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**  
> *(Ahí figura qué entorno y modelo usar según el tipo de procesamiento y consumo de cuota).*

---

## 🗺️ Mapa Global del Flujo (Arquitectura de 5 Fases)

```text
       [ FUENTES DE LA CÁTEDRA ] (PDFs, PPTs, TPs, Exámenes anteriores)
                                   │
                                   ▼
  ┌─────────────────────────────────────────────────────────────────┐
  │ FASE 1: CHECKLIST ATÓMICA DE ESTUDIO                            │
  │ • Entorno: NotebookLM + Gemini Web (Gemini 3.8 Flash)           │
  │ • Objetivo: Extracción doble y fusión en Obsidian (- [ ])       │
  └────────────────────────────────┬────────────────────────────────┘
                                   │
                                   ▼
  ┌─────────────────────────────────────────────────────────────────┐
  │ FASE 2: ESTUDIO ACTIVO CON EL TUTOR COGNITIVO                   │
  │ • Entorno: NotebookLM (Directivas inyectadas vía Bypass)        │
  │ • Objetivo: Micro-pacing socrático (1 idea x mensaje) y clínica │
  └────────────────────────────────┬────────────────────────────────┘
                                   │
                                   ▼
  ┌─────────────────────────────────────────────────────────────────┐
  │ FASE 3: SIMULADOR Y GENERADOR DE EXÁMENES DE CÁTEDRA            │
  │ • Minería (Pasos 1-3B): NotebookLM (mapa, banco y modelo)       │
  │ • Generación (Paso 4): Gemini Flash High o Claude Sonnet 5.5    │
  │ • Objetivo: Simulacros reales (Bucle interactivo o Pack listo)  │
  └────────────────────────────────┬────────────────────────────────┘
                                   │
                                   ▼
  ┌─────────────────────────────────────────────────────────────────┐
  │ FASE 4: GENERACIÓN DE TARJETAS DE ANKI                          │
  │ • Entorno: Google AI Studio (Thinking High + Media Res High)    │
  │ • Objetivo: CSV automatizado (Con / Sin hoja de fórmulas)       │
  └────────────────────────────────┬────────────────────────────────┘
                                   │
                                   ▼
  ┌─────────────────────────────────────────────────────────────────┐
  │ FASE 5: IMPORTACIÓN, IMAGE OCCLUSION Y REPASO ESPACIADO         │
  │ • Entorno: Anki Desktop + AnkiDroid                             │
  │ • Objetivo: Conversión visual de esquemas y sincronización nube │
  └─────────────────────────────────────────────────────────────────┘
```

---

## Fase 1: Carga de Fuentes y Checklist Curricular

El objetivo de esta fase es extraer un **mapa de ruta atómico** de la materia sin omitir temas ni inventar contenidos fuera de programa, mediante una estrategia de validación cruzada.

### 1.1. Carga de fuentes en NotebookLM
1. Creá un cuaderno en **[NotebookLM](https://notebook.google.com/)** con el nombre de la materia (ej: *Mantenimiento Mecánico*).
2. Subí **todo el material oficial**: diapositivas de clase, guías de trabajos prácticos, apuntes teóricos y, fundamentalmente, exámenes parciales y finales de años anteriores.

### 1.2. Extracción y Fusión de la Checklist
Para no depender de los sesgos de una sola interfaz, ejecutamos una **fusión en dos pasos**:
1. **Extracción A (NotebookLM):** En el chat de tu cuaderno, pegá el prompt de **[[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]** indicando la unidad a procesar. NotebookLM generará el desglose inicial anclado a tus fuentes.
2. **Extracción B (Gemini Web):** Abrí **[gemini.google.com](https://gemini.google.com)**, seleccioná ese mismo cuaderno en la barra lateral con el modelo **Gemini 3.8 Flash** y corré **el mismo prompt extractor**.
3. **Fusión definitiva:** Inmediatamente después de que Gemini Web genere su versión, pegale la checklist de NotebookLM con el prompt de fusión (provisto en la guía). Gemini integrará ambas en una **checklist maestra consolidada** sin omisiones ni redundancias.
4. Repetí el proceso de a una unidad por vez y pegá las casillas (`- [ ]`) en tu nota de Obsidian.

> [!DANGER] ⚠️ REGLA CRÍTICA: Borrar el chat en Gemini Web
> Apenas termines de extraer y fusionar las checklists de la materia, **borrá este chat en gemini.google.com**. Arrastrar todo ese historial contamina el contexto para tareas posteriores.

> [!NOTE] 📸 Captura de referencia: Extracción curricular
> ![Pasted image 20260913212906.png](/img/user/_assets/attachments/Pasted%20image%2020260913212906.png)

---

## Fase 2: Estudio Activo con el Tutor Cognitivo

Acá ocurre la construcción del razonamiento y la detección quirúrgica de lagunas conceptuales.

### 2.1. ¿Por qué usamos NotebookLM y no un chat convencional?
* **Cuota inagotable:** Una sesión socrática profunda consume entre 40 y 80 interacciones. En chats comerciales agotarías tu límite en 20 minutos; en NotebookLM el costo es nulo.
* **Micro-pacing estricto:** El tutor no te da clases magistrales ni bloques largos de consignas; te plantea **una sola consigna corta a la vez**, exige que vos produzcas la primera respuesta y evalúa cada una de tus frases con tono clínico.
* **Cero alucinaciones teóricas:** Toda la teoría sale estrictamente de tus archivos con citas nativas clickeables.

### 2.2. Configuración del Tutor: El Bypass de 10.000 Caracteres
NotebookLM tiene un límite nativo de 10.000 caracteres en sus directivas de chat. Para cargar el **Prompt Quirúrgico V4 completo de más de 27.000 caracteres** (disponible en **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]**), usamos el puente de sincronización desde Gemini Web:

1. **Abrir el cuaderno desde Gemini:** Entrá a **[gemini.google.com](https://gemini.google.com)** y seleccioná el cuaderno en la barra lateral izquierda.
   > [!NOTE] 📸 Acceso al Notebook desde Gemini
   > ![Pasted image 20261011145307.png](/img/user/_assets/attachments/Pasted%20image%2020261011145307.png)

2. **Entrar a Notebook Settings:** Hacé clic en los tres puntos (`...`) arriba a la derecha.
   > [!NOTE] 📸 Menú de opciones del cuaderno
   > ![Pasted image 20261011145315.png](/img/user/_assets/attachments/Pasted%20image%2020261011145315.png)

3. **Pegar el prompt y guardar:** Pegá las directivas completas de 27k caracteres en el campo **Instructions** y hacé clic en **Save**.
   > [!NOTE] 📸 Guardado de directivas sin límite
   > ![Pasted image 20261011145351.png](/img/user/_assets/attachments/Pasted%20image%2020261011145351.png)

4. **Verificación en NotebookLM:** Al abrir el cuaderno en **[notebook.google.com](https://notebook.google.com/)**, el contador de *Configure Chat* mostrará **`27236 / 10000`** en violeta.
   > [!WARNING] ⚠️ No tocar nada en esta ventana
   > El sistema ya cargó las 27k directivas y las ejecuta completas. Cerrá la ventana con la cruz (`X`) para no disparar el recorte de texto del navegador.
   > ![Pasted image 20261011145342.png](/img/user/_assets/attachments/Pasted%20image%2020261011145342.png)

### 2.3. Dinámica de la Sesión de Estudio
1. **Apertura:** Al activar el tutor, indicale tu tema/checklist, tu base previa y la profundidad deseada (`Baja`, `Media` o `Alta`).
2. **Ciclo de aprendizaje:** La IA te pedirá predecir o deducir conceptos antes de explicarte nada. Si fallás, te dará pistas progresivas o ejemplos paralelos con otros datos, **protegiendo tu ejercicio original intacto**.
3. **Cierre e integración:** Tras resolver un problema complejo, te exigirá explicar de punta a punta con tus palabras qué hiciste y por qué antes de declarar un ítem como "Dominado".
4. **Cierre de sesión:** Escribí `Cerrar unidad` para obtener el bloque `HANDOFF`. Copialo en Obsidian y pegalo en la sesión siguiente para activar el *brain dump* inicial.

> [!NOTE] 📸 Captura de referencia: Sesión de tutoría activa
> ![Pasted image 20260913213142.png](/img/user/_assets/attachments/Pasted%20image%2020260913213142.png)

---

## Fase 3: Simulador y Generador de Exámenes de Cátedra

Esta fase implementa una **ingeniería inversa documental** para evaluar tu dominio bajo condiciones reales de evaluación. Ver guía completa en **[[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]**.

### 3.1. Fase de Minería Forense (En NotebookLM)
Corrés los prompts 1, 2 y 3 dentro de NotebookLM:
1. **`mapa.md` (Paso 1):** Extrae todas las habilidades evaluables y calcula la recurrencia histórica real ($n/N$ parciales donde apareció).
2. **`banco.md` (Paso 2):** Transcribe el 100% de los exámenes históricos para fijar el estándar docente y filtra selectivamente ejercicios de TP que cubran variantes o zonas ciegas (usando `mapa.md`).
3. **`modelo.md` (Paso 3):** Formaliza la firma de evaluación del profesor (cuota teoría/práctica, duración, estilo y criterios de corrección).
4. *`banco_teoria.md` (Paso 3B - Opcional):* Usalo **únicamente** si casi no tenés parciales viejos con preguntas teóricas o si la cátedra evalúa la teoría en coloquios orales. Si ya tenés suficientes exámenes pasados, **saltealo**.

### 3.2. Fase de Ensamblado y Redacción (Gemini Flash High o Claude Sonnet 5.5)
**NotebookLM es pésimo redactando exámenes completos y alucina con facilidad.** Por eso, descargás los archivos `.md` anteriores y los llevás a un LLM de razonamiento avanzado fuera de NotebookLM:
* **Gemini 3.8 Flash (Thinking High)** en Gemini Web o AI Studio.
* **Claude Sonnet 5.5 (Razonamiento Medium+)** en Claude.ai.

Elegís una de dos modalidades:
* **Ruta A (Entrenamiento Adaptativo):** Rendís a ciegas en el chat, resolvés en papel con cronómetro, usás el comando `Corregir` y la IA actualiza tu estado de aprendizaje (`FRÁGIL`, `CORRECTO 1x`, `CONSOLIDADO`).
* **Ruta B (Fábrica de Paquetes Autosuficientes):** Usás la directiva *Nota* para que ensamble parciales completos con su resolución paso a paso (`Clave`) en el mismo mensaje, priorizando años recientes (2025/2026), sin redundancias y con ecuaciones en LaTeX listas para exportar a PDF y compartir con compañeros.

---

## Fase 4: Generación de Tarjetas de Anki

Una vez comprendido el tema, pasamos a automatizar el sistema de repetición espaciada. Consultá los prompts en **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**.

### 4.1. Entorno de Trabajo: Google AI Studio
Se utiliza **[Google AI Studio](https://aistudio.google.com/prompts/new_chat)** en lugar de Gemini Web convencional por su precisión técnica para desarrolladores:

1. **Desactivar chat temporal:** Asegurá tus chats desmarcando *Temporary chat*.
   > [!NOTE] 📸 Desactivar chat temporal
   > ![Pasted image 20261011150316.png](/img/user/_assets/attachments/Pasted%20image%2020261011150316.png)

2. **Seleccionar el Modelo:** Elegí `Gemini 3.8 Flash` en el panel lateral derecho.
   > [!NOTE] 📸 Selección del modelo y acceso a System Instructions
   > ![Pasted image 20261011150326.png](/img/user/_assets/attachments/Pasted%20image%2020261011150326.png)

3. **Guardar el Prompt como System Instruction:** Creá un preset permanente para no tener que copiar el prompt en cada mensaje.
   > [!NOTE] 📸 Creación y guardado de instrucciones del sistema
   > ![Pasted image 20261011150337.png](/img/user/_assets/attachments/Pasted%20image%2020261011150337.png)  
   > ![Pasted image 20261011150344.png](/img/user/_assets/attachments/Pasted%20image%2020261011150344.png)

4. **Calibración obligatoria en High:** Configurá **Thinking level: High** y **Media resolution: High** para garantizar deducción profunda y visión nítida de subíndices o diagramas.
   > [!NOTE] 📸 Calibración en High (Thinking y Media Resolution)
   > ![Pasted image 20261011150350.png](/img/user/_assets/attachments/Pasted%20image%2020261011150350.png)

### 4.2. Preparación del Envío
1. **Elección de modalidad:** Seleccioná si la materia es **CON hoja de fórmulas** (prohíbe memorizar ecuaciones complejas y evalúa sensibilidad física o límites) o **SIN hoja de fórmulas** (evalúa producción matemática activa desde cero).
2. **Densidad de lote:** Enviá bloques de **4 a 6 diapositivas** o **1 a 2 páginas de apunte** por mensaje.
3. **Comentarios de clase:** Podés sumar al mensaje tus propias notas sobre lo que el profesor remarcó verbalmente en clase para que la IA lo integre en las tarjetas.

> [!NOTE] 📸 Captura de referencia: Generación de mazos en bloque CSV
> ![Pasted image 20260913213301.png](/img/user/_assets/attachments/Pasted%20image%2020260913213301.png)

---

## Fase 5: Importación, Image Occlusion y Repaso en Anki

> [!TIP] Prerrequisito
> Tenés que tener Anki de escritorio instalado en tu computadora y la app móvil (AnkiDroid o AnkiMobile) configurada con tu cuenta de AnkiWeb (_yo no lo descargo porque ya lo tengo_)

---

### 5.1. Guardado e importación inicial del archivo

1. **Crear el archivo:**
   * Copiá el bloque de código CSV crudo devuelto por la IA.
   * Pegalo en un editor de texto plano (Bloc de notas, VS Code) y guardalo como `.csv` o `.txt` (ej: `tarjetas_unidad_1.csv`).
2. **Abrir el asistente de importación:**
   * En Anki Desktop, andá a: **File ➔ Import...** y seleccioná el archivo guardado.
3. **Configuración de opciones:**
   * **Field separator (guessed):** `Semicolon` (Punto y coma).
   * **Allow HTML in fields:** **ACTIVADO** (interruptor en azul).
   * **Note Type:** `Basic`.
   * **Deck:** Elegí el mazo de tu materia.
   * **Existing notes:** `Update`.
   * **Match scope:** `Note Type`.

> [!NOTE] 📸 Captura de referencia: Configuración de archivo y opciones
> ![Pasted image 20260913214554.png](/img/user/_assets/attachments/Pasted%20image%2020260913214554.png)

4. **Mapeo de campos (Field mapping):**
   * **Front:** `1: [Pregunta...]` (Columna 1).
   * **Back:** `2: [Respuesta...]` (Columna 2).
   * **Tags:** `(Nothing)`.
   * Hacé clic en **Import**.

> [!NOTE] 📸 Captura de referencia: Mapeo de campos (Field mapping)
> ![Pasted image 20260913214609.png](/img/user/_assets/attachments/Pasted%20image%2020260913214609.png)

---

### 5.2. Conversión por lotes a Image Occlusion

Las tarjetas rotuladas como `[CREAR IMAGE OCCLUSION]` necesitan convertirse al tipo nativo de oclusión para tapar diagramas.

1. **Filtrar en el Explorador:**
   * Presioná **Browse** (tecla `B`) en Anki.
   * En la barra de búsqueda escribí: `[CREAR IMAGE OCCLUSION]` y presioná Enter.
   * Seleccioná todas las notas resultantes (`Ctrl + A`).
2. **Cambiar el tipo de nota:**
   * Hacé clic derecho: **Notes ➔ Change Note Type...**
   * Cambiá de `Basic` ➔ a `Image Occlusion`.
3. **Configuración de campos:**
   * `(Nothing)` ➔ **Occlusion**
   * `(Nothing)` ➔ **Image**
   * `Front` ➔ **Header**
   * `Back` ➔ **Back Extra**
   * `(Nothing)` ➔ **Comments**
   * Hacé clic en **Save**.

> [!NOTE] 📸 Captura de referencia: Mapeo para cambio de tipo de nota
> ![Pasted image 20260913214656.png](/img/user/_assets/attachments/Pasted%20image%2020260913214656.png)

4. **Confirmación de reescritura:**
   * Aceptá la advertencia de subida completa (*full upload*) haciendo clic en **Yes**.

> [!NOTE] 📸 Captura de referencia: Confirmación de subida completa
> ![Pasted image 20260913214707.png](/img/user/_assets/attachments/Pasted%20image%2020260913214707.png)

---

### 5.3. Sincronización crítica con AnkiWeb (PC y Teléfono)

> [!DANGER] ⛔ PUNTO CRÍTICO: No equivocarse de botón al sincronizar
> Al cambiar el tipo de nota, la base de datos exige una sincronización completa unidireccional. Un clic en el botón equivocado sobreescribe la base con la versión vieja y borra todo el trabajo.

#### 1. En la computadora (Anki Desktop)
* Hacé clic en **Sync** (Sincronizar).
* En la ventana de conflicto entre dispositivos: **SELECCIONÁ EXCLUSIVAMENTE `Upload to AnkiWeb`** (Subir a AnkiWeb).  
* ❌ *NUNCA selecciones `Download from AnkiWeb`.*

> [!NOTE] 📸 Captura de referencia: Selección de Upload to AnkiWeb en PC
> ![Pasted image 20260913214729.png](/img/user/_assets/attachments/Pasted%20image%2020260913214729.png)

#### 2. En el teléfono (AnkiDroid)
* Al abrir la app y presionar sincronizar, aparecerá el cartel de colecciones incompatibles.
* **SELECCIONÁ EXCLUSIVAMENTE `AnkiWeb`**. Esto descarga la versión nueva desde la nube a tu teléfono.  
* ❌ *NUNCA toques `AnkiDroid`, o subirás la base vieja del celular y destruirás lo hecho en la PC.*

> [!NOTE] 📸 Captura de referencia: Selección de AnkiWeb en AnkiDroid
> ![Pasted image 20260915182435.png](/img/user/_assets/attachments/Pasted%20image%2020260915182435.png)

---

### 5.4. Oclusión visual de diagramas y esquemas

Abrí el explorador (`B`), seleccioná una tarjeta convertida y seguí este flujo:

> [!NOTE] 📸 Captura de referencia: Botones de control del editor de oclusión
> ![Pasted image 20260913215126.png](/img/user/_assets/attachments/Pasted%20image%2020260913215126.png)

1. **Uso de los botones superiores:**
   * **Primer botón (Ver / Ocultar texto):** Permite limpiar el campo **Header** (borrá la leyenda `[CREAR IMAGE OCCLUSION]` y dejá el nombre limpio del equipo/proceso). El campo **Back Extra** conservalo, ya que te lista qué variables o partes te pide tapar el prompt.
   * **Segundo botón (Reseteo de imagen):** Hacé clic para eliminar la imagen rota que Anki crea por defecto al convertir de tipo `Basic`. Aparecerá el lienzo en blanco listo para recibir la captura.
2. **Pegar y resolver el bug visual:**
   * Copiá la imagen de la diapositiva (`Win + Shift + S`) y pegala en el lienzo (`Ctrl + V`).
   * *Si la interfaz se congela o no podés dibujar rectángulos:* Hacé clic dos veces en el **primer botón** (ocultar y mostrar texto). Esto refresca la ventana inmediatamente.
3. **Tapar etiquetas:**
   * Seleccioná la herramienta de rectángulo lateral y dibujá las máscaras tapando los puntos críticos indicados en el campo *Back Extra*.

---
## 🛠️ Módulos de Apoyo, Fundamentos y Autoevaluación

Más allá del flujo operativo de 5 pasos para estudiar temas nuevos, el sistema cuenta con tres herramientas transversales que sostienen la calidad del estudio a lo largo del cuatrimestre:

### 🤖 1. Infraestructura de Modelos y Gestión de Cuotas (`[[05]]`)
* **¿Para qué sirve?** Es tu **manual técnico de mantenimiento**. Los modelos de IA cambian constantemente de versión y límites. Esta página actúa como *fuente única de verdad* para saber qué modelo elegir en cada tarea (NotebookLM para minería, AI Studio para Anki, Claude/Gemini Flash para exámenes) sin agotar tus límites diarios gratuitos.
* **¿Cuándo consultarla?** Al inicio del cuatrimestre para configurar tus entornos, o cada vez que sientas que un modelo empieza a responder peor o recortar código.  
➡️ **Ver guía completa:** [[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]

### 📚 2. Biblioteca de Ciencia del Aprendizaje (`[[06]]`)
* **¿Para qué sirve?** Es el **fundamento teórico de todo el sistema**. Explica por qué los prompts están armados como están (por qué la IA no te da la respuesta servida, por qué los lotes se cambiaron por micro-pacing y por qué releer apuntes no sirve). Resume los 6 libros de psicología cognitiva y pedagogía técnica universitaria que sustentan el método.
* **¿Cuándo consultarla?** Cuando quieras entender a fondo los mecanismos de la memoria de trabajo, la teoría de la carga cognitiva y la práctica deliberada, o cuando necesites adaptar el método a una materia atípica.  
➡️ **Ver biblioteca:** [[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]

### 🧭 3. Checklists de Autoevaluación Diagnóstica (`[[07]]`)
* **¿Para qué sirve?** Es tu **prueba de honestidad antes del parcial**. Una suite de 4 listas de verificación diseñadas para auditar tus hábitos reales de estudio (o de docencia si sos ayudante). Su objetivo es destruir la *ilusión de competencia* (creer que sabés algo solo porque lo reconocés al leerlo) y comprobar si sos capaz de producir respuestas y deducciones desde cero en una hoja en blanco.
* **¿Cuándo consultarla?** Entre 1 y 2 semanas antes de cada examen parcial o final, para detectar lagunas y saber si estás estudiando para *entender* o estudiando para *rendir*.  
➡️ **Ver índice de checklists:** [[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]

--- 
## 🧭 Enlaces a las Herramientas del Sistema

- 📋 **Paso 1:** [[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]
- 🧠 **Paso 2:** [[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]
- 🎯 **Paso 3:** [[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]
- 🗂️ **Paso 4:** [[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]
- 🤖 **Infraestructura:** [[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]
- 📚 **Fundamentos:** [[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]
- 🧭 **Autoevaluación:** [[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]
- 📜 **Historial de Mejoras:** [[20. Áreas/Sistema de Estudio con IA/99 - Historial de Versiones (Changelog)\|99 - Historial de Versiones (Changelog)]]


## 🤝 Propósito del Proyecto, Comunidad y Contacto

Este sistema nació durante mis cursadas en la facultad con un único objetivo: **ayudar a cualquier estudiante universitario, de forma 100% gratuita, a estudiar mejor y a integrar las herramientas de Inteligencia Artificial de forma inteligente y exigente**, lejos de la pereza intelectual y los resúmenes pasivos.

### 🌐 Filosofía Libre y Abierta
* **Compartilo sin restricciones:** Este material es libre y abierto. Si te sirvió, compartilo con tus compañeros, usalo en grupos de estudio o pasáselo a los ingresantes.
* **Creá tu propia versión:** Sos totalmente libre de tomar estos prompts, adaptarlos a tu carrera (sea otra ingeniería, medicina, derecho o ciencias exactas), modificar las reglas o armar tu propio flujo de estudio.

### 📬 Contacto y Feedback
No tengo redes sociales; soy simplemente un estudiante de Ingeniería Mecánica que armó este entorno para estudiar mejor y quiso dejarlo documentado para los demás.

Si tenés alguna duda sobre cómo implementar el sistema, encontraste algún error en los prompts o se te ocurre una mejora técnica para sumar:
* ✉️ **Contacto:** [duiliobtorres@gmail.com](mailto:duiliobtorres@gmail.com)

Todo feedback o sugerencia constructiva es más que bienvenido. ¡Éxitos!