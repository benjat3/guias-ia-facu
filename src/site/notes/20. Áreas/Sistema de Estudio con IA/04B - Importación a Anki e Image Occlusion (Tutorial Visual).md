---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/04-b-importacion-a-anki-e-image-occlusion-tutorial-visual/","title":"04B - Importación a Anki e Image Occlusion (Tutorial Visual)","tags":["anki","guia","tutorial","image-occlusion","repaso-espaciado"],"dg-note-properties":{"title":"04B - Importación a Anki e Image Occlusion (Tutorial Visual)","tags":["anki","guia","tutorial","image-occlusion","repaso-espaciado"]}}
---



# 🃏 Tutorial Visual: Importar Tarjetas a Anki e Image Occlusion

> [!tip] 📌 ¿Cuándo usar esta guía?
> Cuando ya generaste tu bloque CSV usando **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]** y querés cargarlo en **Anki** sin romper fórmulas, ni equivocarte en el mapeo de imágenes (*Image Occlusion*), ni perder tarjetas al sincronizar entre PC y celular.

> [!IMPORTANT] 🔧 Prerrequisito gratuito
> Instalá **Anki Desktop** en tu computadora ([apps.ankiweb.net](https://apps.ankiweb.net/)) y creá una cuenta gratuita en **AnkiWeb** para sincronizar con tu celular (**AnkiDroid** en Android o **AnkiMobile** en iOS).

---

## 1. Guardar e importar el archivo `.csv`

1. Copiá el bloque CSV que te devolvió la IA en **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**, pegalo en el Bloc de notas (o editor de texto) y guardalo con extensión **`.csv`** o **`.txt`** (ej. `unidad_1.csv`).
2. En Anki Desktop hacé clic en **File ➔ Import...** y seleccioná el archivo.
3. Configurá exactamente estos 4 campos:
   * **Field separator:** `Semicolon` *(Punto y coma)*.
   * **Allow HTML in fields:** **ACTIVADO** *(en azul, clave para negritas y fórmulas)*.
   * **Note Type:** `Basic`.
   * **Deck:** El mazo de tu materia.

> [!NOTE] 📸 Configuración de importación en Anki Desktop
> ![Pasted image 20260913214554.png](/img/user/_assets/attachments/Pasted%20image%2020260913214554.png)

4. En la sección **Field mapping**, dejá:
   * Columna 1 ➔ `Front`
   * Columna 2 ➔ `Back`
   * `Tags` ➔ `(Nothing)`
5. Hacé clic en **Import**.

> [!NOTE] 📸 Mapeo de campos (Field mapping)
> ![Pasted image 20260913214609.png](/img/user/_assets/attachments/Pasted%20image%2020260913214609.png)

---

## 2. Convertir esquemas en tarjetas de *Image Occlusion*

Cuando un apunte tiene un diagrama, equipo o esquema con partes para recordar, la IA genera filas que empiezan con `[CREAR IMAGE OCCLUSION]`. Para transformarlas en tarjetas visuales:

1. Abrí el explorador (**Browse** o presioná la tecla `B`), buscá `[CREAR IMAGE OCCLUSION]` y seleccioná todas las tarjetas encontradas (`Ctrl + A`).
2. Hacé clic derecho ➔ **Notes ➔ Change Note Type...** y cambiá el tipo de nota de `Basic` a **`Image Occlusion`**.
3. Configurá el mapeo así y guardá (**Save**):
   * `Front` ➔ **Header**
   * `Back` ➔ **Back Extra** *(acá queda la lista de partes a tapar y qué función cumple cada una)*.
   * El resto dejalo en `(Nothing)`.

> [!NOTE] 📸 Mapeo para cambiar el tipo de nota a Image Occlusion
> ![Pasted image 20260913214656.png](/img/user/_assets/attachments/Pasted%20image%2020260913214656.png)

4. Confirmá el aviso presionando **Yes**.

> [!NOTE] 📸 Confirmación del cambio de tipo de nota
> ![Pasted image 20260913214707.png](/img/user/_assets/attachments/Pasted%20image%2020260913214707.png)

---

## 3. Sincronizar entre PC y Celular sin borrar tarjetas

> [!DANGER] ⛔ Cuidado al sincronizar después de cambiar el tipo de nota
> Al cambiar de `Basic` a `Image Occlusion`, Anki modifica la estructura de la base de datos y te pregunta qué versión conservar. Si tocás la opción equivocada, podés pisar el mazo recién creado.

1. **Primero en tu PC (Anki Desktop):** Tocá **Sync** y elegí siempre **`Upload to AnkiWeb`** *(Subir a AnkiWeb)*.

> [!NOTE] 📸 Elegir Upload to AnkiWeb en PC
> ![Pasted image 20260913214729.png](/img/user/_assets/attachments/Pasted%20image%2020260913214729.png)

2. **Después en tu celular (AnkiDroid):** Tocá sincronizar y elegí **`AnkiWeb`** *(descargar al celular lo que subiste desde la PC)*.

> [!NOTE] 📸 Elegir AnkiWeb en AnkiDroid
> ![Pasted image 20260915182435.png](/img/user/_assets/attachments/Pasted%20image%2020260915182435.png)

---

## 4. Pegar la imagen y tapar los rótulos

Volvé al explorador (`B`) en tu computadora y hacé clic en cada tarjeta de `[CREAR IMAGE OCCLUSION]`:

> [!NOTE] 📸 Controles del editor de oclusión en Anki
> ![Pasted image 20260913215126.png](/img/user/_assets/attachments/Pasted%20image%2020260913215126.png)

1. **Botón 1 (Texto):** Borrá el rótulo `[CREAR IMAGE OCCLUSION]` del título para que quede prolijo y mirá en **Back Extra** qué partes conviene tapar.
2. **Botón 2 (Resetear imagen):** Tocá el segundo ícono para limpiar el lienzo.
3. **Pegar captura y tapar:** Hacé una captura de la imagen de tu apunte (`Win + Shift + S`), pegala con `Ctrl + V` y dibujá rectángulos sobre los nombres a ocultar.
   * *(Tip: si pegás la imagen y no te deja dibujar rectángulos de inmediato, tocá dos veces el Botón 1 para refrescar el editor).*

---

## 🧭 Navegación

*Volver al generador de tarjetas:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**
*Volver al inicio y selector de ruta:* 🏠 **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**
*Ver también:* 🤖 **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]** · 🚨 **[[20. Áreas/Sistema de Estudio con IA/00B - Modo Emergencia (Ruta Rápida con IA)\|00B - Modo Emergencia (Ruta Rápida con IA)]]**
