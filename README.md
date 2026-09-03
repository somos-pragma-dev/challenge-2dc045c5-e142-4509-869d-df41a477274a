# Desarrollo de una API REST para gestión de cuentas bancarias

La empresa de fintech necesita una API REST que gestione cuentas bancarias. La API debe soportar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las cuentas. Los actores involucrados son el 'usuario final', el 'core bancario' y el'sistema de auditoría'. La API debe asegurar la consistencia de los datos y manejar adecuadamente los errores del dominio. Debe soportar un throughput de 1 500 solicitudes/segundo en hora pico y un SLA del 99.9%.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | TypeScript Express |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Creación del endpoint de registro de cuentas

**Objetivo:** Implementar el endpoint que permite registrar una nueva cuenta bancaria.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- La solicitud debe contener los campos 'número de cuenta', 'nombre del titular','saldo inicial' y 'fecha de apertura'.
- Prohibir la creación de cuentas con saldo negativo o nombre de titular duplicado.
- Registrar cada solicitud con una clave de idempotencia para evitar duplicados en caso de reintentos.
- Devolver una respuesta con el estado 'creado' y los detalles de la cuenta registrada.

**Entregable:** Endpoint de registro de cuentas operativo que acepta solicitudes, persiste cada solicitud con clave de idempotencia y devuelve la respuesta correcta.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar los datos para evitar duplicidades y manejar errores del dominio.
- Piensa en cómo asegurar la idempotencia de las solicitudes.

</details>

### Fase 2: Implementación de la lectura de cuentas

**Objetivo:** Implementar el endpoint que permite leer los detalles de una cuenta bancaria.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- La solicitud debe contener el 'número de cuenta' como parámetro.
- Devolver una respuesta con los detalles de la cuenta si existe, o un error 'no encontrado' si no existe.
- Asegurar que la respuesta sea consistente con los datos persistidos en la fase anterior.

**Entregable:** Endpoint de lectura de cuentas operativo que acepta solicitudes con el número de cuenta y devuelve la respuesta correcta.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo asegurar la consistencia de los datos entre las fases.
- Piensa en cómo manejar los errores de 'no encontrado'.

</details>

### Fase 3: Implementación de la actualización de cuentas

**Objetivo:** Implementar el endpoint que permite actualizar los detalles de una cuenta bancaria.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- La solicitud debe contener el 'número de cuenta' como parámetro y los campos a actualizar.
- Devolver una respuesta con los detalles actualizados de la cuenta si existe, o un error 'no encontrado' si no existe.
- Asegurar que la respuesta sea consistente con los datos persistidos en las fases anteriores.

**Entregable:** Endpoint de actualización de cuentas operativo que acepta solicitudes con el número de cuenta y los campos a actualizar, y devuelve la respuesta correcta.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo asegurar la consistencia de los datos entre las fases.
- Piensa en cómo manejar los errores de 'no encontrado'.

</details>

### Fase 4: Implementación de la eliminación de cuentas

**Objetivo:** Implementar el endpoint que permite eliminar una cuenta bancaria.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- La solicitud debe contener el 'número de cuenta' como parámetro.
- Devolver una respuesta con el estado 'eliminado' si la cuenta existe y se elimina correctamente, o un error 'no encontrado' si no existe.
- Asegurar que la respuesta sea consistente con los datos persistidos en las fases anteriores.

**Entregable:** Endpoint de eliminación de cuentas operativo que acepta solicitudes con el número de cuenta y devuelve la respuesta correcta.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo asegurar la consistencia de los datos entre las fases.
- Piensa en cómo manejar los errores de 'no encontrado'.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una API REST y cuáles son sus características principales?
- **paraQueSirve**: ¿Para qué sirve el endpoint de registro de cuentas en el contexto de la gestión de cuentas bancarias?
- **comoSeUsa**: ¿Cómo se usa el endpoint de lectura de cuentas para obtener los detalles de una cuenta bancaria?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al implementar los endpoints de una API REST y cómo se pueden manejar?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de una API REST en términos de consistencia de datos y manejo de errores?

## Criterios de Evaluacion

- Implementación correcta del endpoint de registro de cuentas.
- Implementación correcta del endpoint de lectura de cuentas.
- Implementación correcta del endpoint de actualización de cuentas.
- Implementación correcta del endpoint de eliminación de cuentas.
- Manejo adecuado de los errores del dominio en todos los endpoints.
- Aseguramiento de la consistencia de los datos entre las fases.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
