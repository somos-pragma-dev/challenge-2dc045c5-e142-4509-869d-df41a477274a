# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { AccountController } from './controllers/accountController';
import { ErrorHandler } from './middlewares/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/accounts', AccountController);
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// === ARCHIVO: src/config/app.ts ===

import { Account } from '../models/account';
import { AccountService } from '../services/accountService';

export class AccountController {
  private accountService: AccountService;

  constructor() {
    this.accountService = new AccountService();
  }

  async createAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber, accountHolderName, initialBalance, openingDate } = req.body;
      const account = await this.accountService.createAccount(accountNumber, accountHolderName, initialBalance, openingDate);
      res.status(201).json(account);
    } catch (error) {
      next(error);
    }
  }

  async getAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber } = req.params;
      const account = await this.accountService.getAccount(accountNumber);
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  }

  async updateAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber } = req.params;
      const { accountHolderName, balance } = req.body;
      const account = await this.accountService.updateAccount(accountNumber, accountHolderName, balance);
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  }

  async deleteAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber } = req.params;
      const result = await this.accountService.deleteAccount(accountNumber);
      if (!result) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.status(200).json({ message: 'Account deleted' });
    } catch (error) {
      next(error);
    }
  }
}

// === ARCHIVO: src/controllers/accountController.ts ===

import { Account } from './account';

export class AccountService {
  private accounts: Account[] = [];

  async createAccount(accountNumber: string, accountHolderName: string, initialBalance: number, openingDate: Date): Promise<Account> {
    if (initialBalance < 0) {
      throw new Error('Initial balance cannot be negative');
    }
    const existingAccount = this.accounts.find(account => account.accountHolderName === accountHolderName);
    if (existingAccount) {
      throw new Error('Account holder name already exists');
    }
    const account = new Account(accountNumber, accountHolderName, initialBalance, openingDate);
    this.accounts.push(account);
    return account;
  }

  async getAccount(accountNumber: string): Promise<Account | undefined> {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }

  async updateAccount(accountNumber: string, accountHolderName: string, balance: number): Promise<Account | undefined> {
    const account = this.accounts.find(account => account.accountNumber === accountNumber);
    if (!account) {
      return undefined;
    }
    account.accountHolderName = accountHolderName;
    account.balance = balance;
    return account;
  }

  async deleteAccount(accountNumber: string): Promise<boolean> {
    const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);
    if (index === -1) {
      return false;
    }
    this.accounts.splice(index, 1);
    return true;
  }
}

// === ARCHIVO: src/services/accountService.ts ===

export class Account {
  accountNumber: string;
  accountHolderName: string;
  balance: number;
  openingDate: Date;

  constructor(accountNumber: string, accountHolderName: string, balance: number, openingDate: Date) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
    this.openingDate = openingDate;
  }
}

// === ARCHIVO: src/models/account.ts ===

import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
  public static handle(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
  }
}

// === ARCHIVO: src/middlewares/errorHandler.ts ===

import { AccountController } from '../controllers/accountController';

describe('AccountController', () => {
  let accountController: AccountController;

  beforeEach(() => {
    accountController = new AccountController();
  });

  it('should create a new account', async () => {
    const req = {
      body: {
        accountNumber: '123456789',
        accountHolderName: 'John Doe',
        initialBalance: 1000,
        openingDate: new Date()
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.createAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should get an existing account', async () => {
    const req = {
      params: {
        accountNumber: '123456789'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.getAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should update an existing account', async () => {
    const req = {
      params: {
        accountNumber: '123456789'
      },
      body: {
        accountHolderName: 'Jane Doe',
        balance: 2000
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.updateAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should delete an existing account', async () => {
    const req = {
      params: {
        accountNumber: '123456789'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.deleteAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

// === ARCHIVO: src/tests/accountController.test.ts ===

import { AccountService } from '../services/accountService';

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  it('should create a new account', async () => {
    const account = await accountService.createAccount('123456789', 'John Doe', 1000, new Date());
    expect(account.accountNumber).toBe('123456789');
    expect(account.accountHolderName).toBe('John Doe');
    expect(account.balance).toBe(1000);
  });

  it('should get an existing account', async () => {
    const account = await accountService.getAccount('123456789');
    expect(account?.accountNumber).toBe('123456789');
  });

  it('should update an existing account', async () => {
    const account = await accountService.updateAccount('123456789', 'Jane Doe', 2000);
    expect(account?.accountHolderName).toBe('Jane Doe');
    expect(account?.balance).toBe(2000);
  });

  it('should delete an existing account', async () => {
    const result = await accountService.deleteAccount('123456789');
    expect(result).toBe(true);
  });
});

// === ARCHIVO: src/tests/accountService.test.ts ===

```
