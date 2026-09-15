---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/00-inicio-y-flujo-de-trabajo/","title":"00 - Inicio y Flujo de Trabajo","tags":["guia","estudio-activo","workflow","ingenieria","gardenEntry"],"dg-note-properties":{"title":"00 - Inicio y Flujo de Trabajo","tags":["guia","estudio-activo","workflow","ingenieria","gardenEntry"]}}
---

> 👨‍💻 **Desarrollado por Duilio** • Sistema de Estudio Universitario con IA
---
# 🚀 Sistema de Estudio Activo con IA: Flujo Completo

Este sistema no busca que la IA te haga resúmenes pasivos ni te dé respuestas servidas. Su objetivo es aplicar los principios de la **ciencia del aprendizaje** para estudiar materias técnicas de ingeniería minimizando el tiempo muerto y maximizando la retención.

> [!TIP] 📌 Modelos de IA actualizados
> Para no desactualizar esta guía con el paso del tiempo, consultá siempre la referencia rápida en:  
> ➡️ **[[20. Áreas/Sistema de Estudio con IA/04 - Modelos Recomendados por Tarea\|04 - Modelos Recomendados por Tarea]]**  
> *(Ahí figura qué modelo usar según el tipo de procesamiento y consumo de cuota).*

---

## 🗺️ Mapa Global del Flujo

```text
  [ FUENTES DE LA CÁTEDRA ] (PDFs, PPTs, TPs, Exámenes)
              │
              ▼
  ┌─────────────────────────────────────────────────────────┐
  │ FASE 1: CHECKLIST ATÓMICA                               │
  │ • Entorno: gemini.google.com (conectado al Notebook)    │
  │ • Objetivo: Crear el mapa de estudio en Obsidian (- [ ])│
  └───────────────────────────┬─────────────────────────────┘
                              │
                              ▼
  ┌─────────────────────────────────────────────────────────┐
  │ FASE 2: TUTOR COGNITIVO                                 │
  │ • Entorno: https://notebook.google.com/ (NotebookLM)    │
  │ • Objetivo: Estudio activo e intercalado por lotes      │
  └───────────────────────────┬─────────────────────────────┘
                              │
                              ▼
  ┌─────────────────────────────────────────────────────────┐
  │ FASE 3: GENERACIÓN DE ANKI                              │
  │ • Entorno: gemini.google.com                            │
  │ • Objetivo: Mazos CSV precisos (Con / Sin formulario)   │
  └───────────────────────────┬─────────────────────────────┘
                              │
                              ▼
  [ REPASO ESPACIADO EN ANKI + RESOLUCIÓN PRÁCTICA ]
````

## Fase 1: Carga de Fuentes y Checklist Curricular

El objetivo de esta fase es extraer un **mapa de ruta atómico** de la materia sin omitir temas ni inventar contenidos fuera de programa.

### 1.1. Carga de fuentes

1. Creá un cuaderno en **NotebookLM** con el nombre de la materia (ej: _Termodinámica_).
    
      
    
2. Subí **todo el material oficial**: diapositivas de clase, guías de trabajos prácticos, apuntes teóricos y, fundamentalmente, exámenes parciales y finales resueltos de años anteriores.
    
      
    

### 1.2. Extracción de la Checklist

1. Andá a **[gemini.google.com](https://gemini.google.com)**.
    
      
    
2. Abrí el cuaderno de NotebookLM correspondiente a la materia desde la interfaz de Gemini.
    
      
    
3. Asegurate de seleccionar el modelo de alta capacidad analítica.
    
      
    
4. Copiá y pegá el prompt de **[[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]**, especificando la unidad a procesar:
    
      
    
    > _"Procesá el material cargado para la Unidad 1."_
    > 
    >   
    
5. Repetí el proceso para las siguientes unidades, **siempre de a una por mensaje**. Si le pedís todo el programa junto, el modelo colapsa o saltea temas finos.
    
      
    
6. Copiá el bloque Markdown resultante y pegalo en tu nota de seguimiento en Obsidian.
    
      
    

> [!DANGER] ⚠️ REGLA CRÍTICA: Borrar el chat
> 
> Apenas termines de extraer todas las checklists y copiarlas a Obsidian, **borrá este chat en gemini.google.com**. No continúes estudiando en este mismo hilo; arrastrar todo el historial contamina el contexto y satura la ventana de atención del modelo.
> 
>   

> [!NOTE] 📸 Captura de referencia
> 
> ![Pasted image 20260913212906.png](/img/user/_assets/attachments/Pasted%20image%2020260913212906.png)
> 
> 
>   

## Fase 2: Estudio Activo con el Tutor Cognitivo

Acá ocurre la construcción del razonamiento y la detección de lagunas conceptuales.

  

### 2.1. ¿Por qué usamos Gemini Notebook (NotebookLM)?

El tutor cognitivo se corre **directamente dentro de NotebookLM** y no en el chat general de Gemini.

  

- **Consumo de tokens/cuota:** Un modelo avanzado como Flash extendido consumiría tu límite diario en pocos mensajes. En NotebookLM el entorno es sumamente accesible y podés chatear de forma intensiva sin riesgo de agotar tu cuenta.
    
      
    
- **Cero alucinaciones:** NotebookLM prioriza estrictamente la epistemología híbrida y el anclaje a las fuentes cargadas.
    
 
### 2.2. Configuración del Tutor y Ejecución de la Sesión

En NotebookLM el prompt del tutor no se envía como un mensaje común del chat; se inyecta en las directivas del sistema para que el modelo asuma ese rol de forma permanente en todas sus respuestas.

  

#### 1. Inyección del Prompt del Tutor

1. **Abrir la configuración del cuaderno:**
    
      
    
    En la esquina superior derecha del panel de **Chat** de NotebookLM, hacé clic en el ícono de controles deslizantes (**Configurar cuaderno**).
    
      
    

> [!NOTE] 📸 Captura de referencia: Acceso a Configurar cuaderno
> 
> ![Pasted image 20260915181739.png](/img/user/_assets/attachments/Pasted%20image%2020260915181739.png)
> 
>   

2. **Cargar directivas personalizadas:**
    
      
    - En la ventana emergente _Configura el chat_, dentro de la sección **Define tu objetivo, estilo o rol de conversación**, seleccioná la opción **Personalizado**.
        
          
        
    - Copiá el prompt completo de **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]** y pegalo dentro del cuadro de texto.
        
          
        
    - En **Elige la longitud de la respuesta**, dejá seleccionada la opción **Predeterminado**.
        
          
        
    - Hacé clic en el botón azul **Guardar** abajo a la derecha.
        
          
        

> [!NOTE] 📸 Captura de referencia: Modo personalizado y guardado del prompt
> 
> ![Pasted image 20260915181756.png](/img/user/_assets/attachments/Pasted%20image%2020260915181756.png)
> 
>   

#### 2. Estrategia de lotes e intercalación (_Interleaving_)

Una vez guardadas las instrucciones, el chat aplicará la metodología de estudio activo automáticamente en cada mensaje.

  

1. **Envío por bloques reducidos:**
    
      
    
    No le envíes toda la checklist junta. Seleccioná **entre 4 y 8 ítems** de tu nota de Obsidian y mandáselos en un único mensaje de chat.
    
      
    
2. **El poder de la intercalación:**
    
      
    
    Para maximizar la retención a largo plazo, **mezclá ítems conceptuales con problemas prácticos de cálculo**, o conceptos de unidades distintas (por ejemplo: 2 ítems de la Unidad 1 y 2 de la Unidad 2). Podés indicarle en el mensaje:
    
      
    
    > _"Acá tenés mi lote de ítems: [pegás los ítems]. Intercalalos en el orden pedagógico más conveniente."_
    > 
### 2.3. Manejo de solapamientos

Como la IA no ve la checklist entera de una vez, a veces al explicar un concepto resolverá naturalmente un ítem que tenías anotado para más adelante. No pasa nada: en el siguiente lote que le mandes, simplemente agregale:

  

> _"Si en tus respuestas anteriores ya cubriste alguno de estos ítems, marcalo explícitamente y pasá al siguiente."_
> 
>   

### 2.4. Criterio de "Dificultad Deseable"

**No es necesario ni obligatorio pasar el 100% de los ítems por el tutor.**

  

Si un concepto ya te quedó claro resolviendo un TP en papel o mediante tarjetas de Anki, marcalo en Obsidian y seguí. Lo que importa es que el conocimiento esté consolidado; el esfuerzo cognitivo propio es lo que fija la memoria a largo plazo.

  

> [!NOTE] 📸 Captura de referencia
> 
> ![Pasted image 20260913213142.png](/img/user/_assets/attachments/Pasted%20image%2020260913213142.png)
> 
> 
>   

## Fase 3: Generación de Tarjetas de Anki

Una vez comprendido el tema, pasamos a automatizar el sistema de repaso espaciado para que no se te olvide con las semanas.

  

### 3.1. Preparación del Prompt

1. Volvé a **[gemini.google.com](https://gemini.google.com)** con el modelo indicado.
    
      
    
2. Elegí el prompt correspondiente en **[[20. Áreas/Sistema de Estudio con IA/03 - Generador de Tarjetas de Anki\|03 - Generador de Tarjetas de Anki]]**:
    
      
    - **Materias CON hoja de fórmulas:** Descarta memorización estéril de fórmulas complejas y prioriza interpretación física, condiciones de validez y sensibilidad paramétrica.
        
          
        
    - **Materias SIN hoja de fórmulas:** Evalúa deducción y producción activa de memoria, **indicando si se incluyen o no demostraciones completas.**
        
          
        

### 3.2. Tamaño de lote óptimo

- En el mismo mensaje donde pegás el prompt, adjuntá el contenido a procesar.
    
      
    
- **Regla de oro de densidad:** Enviá el equivalente a **4 a 6 diapositivas** o **1 a 2 páginas de apunte** por mensaje.
    
      
    
- Si le tirás un PDF de 50 páginas de golpe, la IA omitirá detalles tácticos cruciales. Procesá por bloques consecutivos manteniendo siempre ese rango.
    
      
    

> [!NOTE] 📸 Captura de referencia
> 
>![Pasted image 20260913213301.png](/img/user/_assets/attachments/Pasted%20image%2020260913213301.png)
> 
> 

## Fase 4: Importación y Optimización en Anki
> [!TIP] Prerrequisito
> Obviamente tenés que tener Anki instalado en la compu *(yo no lo instalo porque ya lo tengo)*.

Esta fase requiere precisión técnica para evitar errores de formato, desconfiguración de campos o pérdida de datos durante la sincronización.

---

### 4.1. Guardado e importación inicial del archivo

1. **Crear el archivo:**
   * Copiá el bloque de código CSV crudo que te devolvió Gemini.
   * Abrí tu editor de texto plano (Bloc de notas, VS Code, etc.) y pegalo en un archivo nuevo en blanco.
   * Guardalo con extensión `.csv` o `.txt` (por ejemplo: `tarjetas_unidad_1.csv`).

2. **Abrir el asistente de importación en Anki:**
   * En la ventana principal de Anki, andá al menú superior izquierdo: **File ➔ Import...**
   * Seleccioná el archivo que acabás de guardar.

3. **Configuración obligatoria de la ventana de importación:**
   Configurá las opciones exactamente en este orden:
   * **Field separator (guessed):** Seleccioná `Semicolon` (Punto y coma).
   * **Allow HTML in fields:** **ACTIVADO** (el interruptor debe quedar en azul).
   * **Note Type:** `Basic`.
   * **Deck:** Elegí el mazo correspondiente a la materia.
   * **Existing notes:** `Update`.
   * **Match scope:** `Note Type`.
   * **Tag all notes (Opcional):** Podés ingresar una etiqueta organizativa para ubicar rápido el lote (por ejemplo: `U3_Mecanismos_Fatiga_IA`).

> [!NOTE] 📸 Captura de referencia: Configuración de archivo y opciones
> ![Pasted image 20260913214554.png](/img/user/_assets/attachments/Pasted%20image%2020260913214554.png)

4. **Mapeo estricto de campos (Field mapping):**
   Al final de la ventana de importación, verificá que las columnas coincidan exactamente:
   * **Front:** `1: [Pregunta...]` (Columna 1).
   * **Back:** `2: [Respuesta...]` (Columna 2).
   * **Tags:** `(Nothing)`.
   * Hacé clic en el botón azul **Import** (arriba a la derecha).

> [!NOTE] 📸 Captura de referencia: Mapeo de campos (Field mapping)
> ![Pasted image 20260913214609.png](/img/user/_assets/attachments/Pasted%20image%2020260913214609.png)

---

### 4.2. Conversión por lotes a Image Occlusion

Todas las tarjetas entran inicialmente como tipo `Basic`. Las tarjetas que el prompt rotuló como `[CREAR IMAGE OCCLUSION]` necesitan convertirse al tipo nativo de oclusión de imagen para poder tapar los diagramas.

1. **Filtrar el lote en el Explorador:**
   * En la pantalla principal de Anki, presioná **Browse** (o tecla `B`) para abrir el explorador.
   * Seleccioná el mazo donde importaste las tarjetas.
   * En la barra de búsqueda superior escribí: `[CREAR IMAGE OCCLUSION]` y presioná Enter.
   * Seleccioná todas las tarjetas resultantes (`Ctrl + A` en Windows).

2. **Cambiar el tipo de nota:**
   * Hacé clic derecho sobre la selección y andá a: **Notes ➔ Change Note Type...**
   * Arriba, configurá el cambio: de `Basic` ➔ a `Image Occlusion`.

3. **Configuración de campos (Fields):**
   Mapeá los campos de izquierda a derecha de la siguiente manera:
   * `(Nothing)` ➔ **Occlusion**
   * `(Nothing)` ➔ **Image**
   * `Front` ➔ **Header**
   * `Back` ➔ **Back Extra**
   * `(Nothing)` ➔ **Comments**
   * Hacé clic en **Save**.

> [!NOTE] 📸 Captura de referencia: Mapeo para cambio de tipo de nota
> ![Pasted image 20260913214656.png](/img/user/_assets/attachments/Pasted%20image%2020260913214656.png)

4. **Confirmación de reescritura:**
   * Anki mostrará un aviso advirtiendo que este cambio requerirá una subida completa de la base de datos (*full upload*).
   * Hacé clic en **Yes**.

> [!NOTE] 📸 Captura de referencia: Confirmación de subida completa
> ![Pasted image 20260913214707.png](/img/user/_assets/attachments/Pasted%20image%2020260913214707.png)

---
### 4.3. Sincronización crítica con AnkiWeb (PC y Teléfono) 

> [!DANGER] ⛔ PUNTO CRÍTICO: No equivocarse de botón al sincronizar Al cambiar el tipo de nota, la base de datos exige una sincronización completa unidireccional. Un clic en el botón equivocado **sobreescribe la base con la versión vieja y borra todo el trabajo**.
> 
>   

#### 1. En la computadora (Anki de escritorio)

1. En la ventana principal de Anki, hacé clic en **Sync** (Sincronizar).
    
      
    
2. En la ventana de conflicto entre dispositivos:
    
      
    - **SELECCIONÁ EXCLUSIVAMENTE:** **`Upload to AnkiWeb`** (Subir a AnkiWeb).
        
          
        
    - ❌ **NUNCA selecciones `Download from AnkiWeb`**, o descargarás la versión anterior de la nube y perderás las tarjetas importadas.
        
          
        

> [!NOTE] 📸 Captura de referencia: Selección de Upload to AnkiWeb en PC ![Pasted image 20260913214729.png](/img/user/_assets/attachments/Pasted%20image%2020260913214729.png)
> 
>   

#### 2. En el teléfono (AnkiDroid)

Apenas abras la app en el celular y toques el botón de sincronizar en la barra superior, saltará el aviso de colecciones incompatibles:

  

1. Aparecerá el cartel: _"Seleccionar colección a mantener. Las colecciones no se pueden combinar. ¿Qué colección quieres mantener?"_.
    
      
    
2. **SELECCIONÁ EXCLUSIVAMENTE:** **`AnkiWeb`**.
    
      
    - Esto descarga la versión actualizada con las nuevas tarjetas desde la nube a tu teléfono.
        
          
        
    - ❌ **NUNCA toques `AnkiDroid`**, porque subirías la base vieja del celular a la nube y destruirías todo lo que acabás de procesar en la PC.
        
          
        

> [!NOTE] 📸 Captura de referencia: Selección de AnkiWeb en AnkiDroid
> 
> ![Pasted image 20260915182435.png](/img/user/_assets/attachments/Pasted%20image%2020260915182435.png)
> 
>   

---

### 4.4. Oclusión visual de diagramas y esquemas

Una vez sincronizado y asegurado el mazo en AnkiWeb, abrí el explorador (`B`), seleccioná una de las tarjetas convertidas y seguí este flujo para configurar la imagen sin que se rompa:

> [!NOTE] 📸 Captura de referencia: Botones de control del editor de oclusión
> ![Pasted image 20260913215126.png](/img/user/_assets/attachments/Pasted%20image%2020260913215126.png)

---

#### 1. Uso de los botones superiores (recuadro amarillo)
Arriba a la derecha del editor vas a ver dos botones esenciales para trabajar sobre la tarjeta:

* **Primer botón (Ver / Ocultar campos de texto):**
  * Te abre la vista de los campos **Header** y **Back Extra**.
  * **Limpieza del Header:** Se recomienda borrar la leyenda `[CREAR IMAGE OCCLUSION]` y dejar únicamente el título o descripción limpia del componente/diagrama.
  * **Uso del Back Extra:** Dejá este campo tal como vino; no molesta al repasar y contiene la lista exacta de qué componentes o variables te pide tapar el prompt, lo que te sirve de guía para no cometer errores.

* **Segundo botón (Editor y reseteo de imagen):**
  * Al haber cambiado el tipo de nota desde `Basic`, Anki suele asociar un archivo vacío o una imagen rota por defecto.
  * Hacé clic en este botón para **eliminar la imagen con error**. Una vez borrada, aparecerá automáticamente el lienzo en blanco con el botón para cargar o pegar tu nueva imagen.

---

#### 2. Carga de imagen y solución al bug de renderizado

1. **Copiar la imagen:**
   * Andá a las diapositivas de la cátedra o al chat de Gemini donde se analizó el esquema.
   * Copiá la imagen al portapapeles o hacé una captura rápida (`Win + Shift + S` / `Impr Pant`).
2. **Pegar en Anki:**
   * Pegá la imagen directamente en el lienzo de oclusión (`Ctrl + V`).

> [!WARNING] ⚠️ Solución al bug visual de la primera carga
> La primera vez que pegás la imagen sobre una tarjeta recién convertida, **la interfaz se congela o no permite dibujar los rectángulos**.  
> **Para destrabarlo:**
> 1. Hacé clic una vez en el **primer botón** (el de ver los campos de texto).
> 2. Volvé a hacer clic en el **primer botón** (volver a la vista de oclusión).  
> Al alternar de pantalla una sola vez, la interfaz se refresca por completo y ya podés seleccionar la herramienta de rectángulos sin ningún inconveniente.

---

#### 3. Tapar etiquetas y guardar
* Seleccioná la herramienta de rectángulo en la barra lateral izquierda.
* Guiándote con lo que leíste en **Back Extra**, dibujá las máscaras tapando los 3 o 4 puntos críticos indicados (ej: directrices, caracol, rodete, difusor).
* Los cambios quedan guardados en la tarjeta de forma definitiva.
## 🧭 Próximos Pasos y Enlaces a los Prompts

- 📄 **Paso 1:** [[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]
    
      
    
- 🧠 **Paso 2:** [[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]
    
      
    
- 🗂️ **Paso 3:** [[20. Áreas/Sistema de Estudio con IA/03 - Generador de Tarjetas de Anki\|03 - Generador de Tarjetas de Anki]]
    
    
- 🤖 **Tabla de Modelos:** [[20. Áreas/Sistema de Estudio con IA/04 - Modelos Recomendados por Tarea\|04 - Modelos Recomendados por Tarea]]
    
