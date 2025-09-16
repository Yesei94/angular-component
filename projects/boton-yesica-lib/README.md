# Botón Yesica - Componente Angular

Un componente de botón personalizado para Angular creado por Yesica.

## Instalación

```bash
npm install boton-yesica-angular
```

## Uso

### 1. Importar el módulo en tu aplicación

```typescript
import { BotonYesicaLibModule } from 'boton-yesica-angular';

@NgModule({
  imports: [
    BotonYesicaLibModule
  ]
})
export class AppModule { }
```

### 2. Usar el componente en tu template

```html
<app-boton-yesica 
  texto="Mi Botón" 
  tipo="primary" 
  (clickEvent)="miFuncion()">
</app-boton-yesica>
```

## Propiedades

| Propiedad | Tipo | Descripción | Valor por defecto |
|-----------|------|-------------|-------------------|
| `texto` | string | Texto que se muestra en el botón | 'Botón de Yesica' |
| `tipo` | 'primary' \| 'secondary' \| 'success' \| 'danger' | Estilo del botón | 'primary' |
| `deshabilitado` | boolean | Si el botón está deshabilitado | false |

## Eventos

| Evento | Descripción |
|--------|-------------|
| `clickEvent` | Se emite cuando se hace clic en el botón |

## Ejemplos

### Botón básico
```html
<app-boton-yesica texto="Hola Mundo"></app-boton-yesica>
```

### Botón con tipo específico
```html
<app-boton-yesica 
  texto="Éxito" 
  tipo="success" 
  (clickEvent)="onSuccess()">
</app-boton-yesica>
```

### Botón deshabilitado
```html
<app-boton-yesica 
  texto="No disponible" 
  [deshabilitado]="true">
</app-boton-yesica>
```

## Tipos de botones

- **primary**: Azul con gradiente
- **secondary**: Rosa con gradiente  
- **success**: Azul claro con gradiente
- **danger**: Rosa-naranja con gradiente

## Autor

Creado por **Yesica** para su proyecto universitario.

## Licencia

MIT