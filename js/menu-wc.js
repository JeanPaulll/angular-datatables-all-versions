'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-datatables-all-versions documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/DataTableModule.html" data-type="entity-link">DataTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' : 'data-target="#xs-components-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' :
                                            'id="xs-components-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' }>
                                            <li class="link">
                                                <a href="components/DataTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTableHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTablePaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTablePaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableRowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTableRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FieldFilterChooserPopupDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldFilterChooserPopupDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FieldFilterPopupDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldFilterPopupDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' : 'data-target="#xs-directives-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' :
                                        'id="xs-directives-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' }>
                                        <li class="link">
                                            <a href="directives/DataTableColumnDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTableColumnDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HideDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' : 'data-target="#xs-pipes-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' :
                                            'id="xs-pipes-links-module-DataTableModule-1b9537730b16cd0459eae611a2976776"' }>
                                            <li class="link">
                                                <a href="pipes/MinPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MinPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PixelConverter.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PixelConverter</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DataTableResource.html" data-type="entity-link">DataTableResource</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link">MyErrorStateMatcher</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DataTableParams.html" data-type="entity-link">DataTableParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataTableTranslations.html" data-type="entity-link">DataTableTranslations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-1.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Filter.html" data-type="entity-link">Filter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterableField.html" data-type="entity-link">FilterableField</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});