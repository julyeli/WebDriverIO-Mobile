# WebDriverIO  Mobile
## Framework Appium  Cucumber con implementación en Javascript

### Requerimientos
- node >= 16
- Appium intalación global

### Estructura 
```
Escenarios de pruebas => ./features/test-cases/..
Implementación de pasos => ./features/step-definitions/..
Definición de Objetos de página => ./features/pageobjects/..
```

### Configuración
> Los archivos de configuración estan nombrados con el siguiente formato "wdio.<clase>.conf.js
> La configuración para cada tipo de OS de dispositivo, se encuentra en el archivo "wdio.shared.conf.js", conteniendo los valores predeterminados para iniciar el OS respectivo, como ser Android.
> Las configuraciones especificas para OS Android se encuentran en el archivo de configuración "wdio.android.app.conf.js"

### Ejecución de pruebas
```bash
npm run test
```

## Otras especificaciones
### Localización de elementos
> La estrategia apara usar localizadores en app de Android es usar "accessibilityID", que facilita la creación del script y la ejecución para Android dado que las buenas practicas indican que la mayoria de los elementos de una aplicación debería tener accessibilityID.
> Si en cambio, necesita usar XPATH porque no tiene ID, y para hacerlo compatible para Android y para iOS, puede usar el siguiente códigoÑ 
```js
    const SELECTORS = {
        WEB_SCREEN: browser.isAndroid
            ? '*//android.webkit.WebView'
            : '*//XCUIElementTypeWebView',
    };
```


```
WORK IN PROGRESS
```
