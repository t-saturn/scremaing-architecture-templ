module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Corrección de bugs
        'docs', // Cambios en documentación
        'style', // Cambios de formato (no afectan el código)
        'refactor', // Refactorización de código
        'perf', // Mejoras de rendimiento
        'test', // Añadir o corregir tests
        'build', // Cambios en el sistema de build
        'ci', // Cambios en CI/CD
        'chore', // Tareas de mantenimiento
        'revert', // Revertir commits anteriores
        'wip', // Work in progress (trabajo en progreso)
        'hotfix', // Corrección urgente en producción
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 10000], // Permitir hasta 10000 caracteres por línea
    'footer-max-line-length': [2, 'always', 10000], // Igual para el footer
  },
};
