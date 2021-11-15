import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokensService } from 'src/app/services/tokens.service';

@Component({
    selector: 'ngbd-modal-excluir-conta',
    templateUrl: './excluir-conta.html',
    styleUrls: ['./excluir-conta.css'],
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class NgbdModalExcluirConta {
    id = this.route.snapshot.paramMap.get('id');
    tokenAccess = this.token.getToken();

    closeResult = '';

    constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute, config: NgbModalConfig, private modalService: NgbModal, private token: TokensService) {
        // customize default values of modals used by this component tree
        config.backdrop = true;
        config.keyboard = true;
    }

    open(content: any) {
        this.modalService.open(content, { size: 'lg' });
    }

    deleteUser() {
        this.auth.deleteUser(this.id, this.tokenAccess).subscribe(
            () => {
                alert('Usuário deletado');
                this.router.navigate(['home/']);
            }, err => {
                console.log('Erro ao deletar: ', err);
            })
    }
}