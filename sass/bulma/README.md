# Vendored Bulma

Bulma 1.0.4 (MIT), copied from the `bulma` npm package's `sass/` folder.

Local changes, to reapply when updating:

- Every `.scss` file is prefixed with `_` so Zola treats it as a partial instead of compiling it as its own entry point.
- `color.channel(...)` and `color.adjust(..., $space: hsl)` are replaced with `color.red/green/blue/hue/saturation/lightness` and plain `color.adjust`, because Zola's SASS compiler (grass) does not support them. Affects `utilities/_functions.scss` and `utilities/_css-variables.scss`.
- `@extend %placeholder` is replaced with `@include` of the mixin behind it (`%block`, `%overlay`, `%control`, `%delete`, `%loader`, `%unselectable`, `%reset`, `%arrow`, and `%input` in the form files), because grass does not apply `@extend` across modules. Without this the modal overlay and input styles are dropped.
