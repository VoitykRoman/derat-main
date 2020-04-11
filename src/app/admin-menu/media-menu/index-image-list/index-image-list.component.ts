import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IndexImageService } from 'src/app/services/index-image.service';
import { IndexImage } from 'src/app/models/index-image.model';
import { IgxFilterOptions, slideOutRight, slideInLeft } from 'igniteui-angular';
import { Base64Service } from 'src/app/shared/base64.service';
import { useAnimation } from '@angular/animations';

@Component({
    selector: "app-index-image-list",
    styleUrls: ["./index-image-list.component.scss"],
    templateUrl: "./index-image-list.component.html"
})
export class IndexImageListComponent implements OnInit {

    newIndexImage = {
        imageUrl: '',
        title: '',
        description: ''
    }
    public searchIndex: string;
    public density = "comfortable";
    @Input() indexImages: IndexImage[];
    selectedFile;
    page = 1;
    pageSize = 3;
    @Output() onCreate = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();
    constructor(private indexImageService: IndexImageService,
        private base64Service: Base64Service) {
    }


    ngOnInit() {
    }

    createNewIndexImage() {
        this.indexImageService.createNewIndexImage(this.newIndexImage).toPromise().then(e => {
            this.onCreate.emit();
        })
    }

    deleteIndexImage(id: number) {
        this.indexImageService.deleteindexImage(id).toPromise().then(e => {
           
        })
        this.onDelete.emit(id);
    }

    updateIndexImage(indexImage: IndexImage, event) {
        const indexImageToUpdate = {
            id: indexImage.id,
            imageUrl: indexImage.imageUrl,
            title: indexImage.title,
            description: indexImage.description
        }
        this.indexImageService.updateIndexImage(indexImageToUpdate).toPromise().then(e => {
            event.dialog.close();
        })
    }

    onFileChanged(event, image: IndexImage) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                image.imageUrl = <string>dataUrl;
            })
    }

    onNewFileChanged(event) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                this.newIndexImage.imageUrl = <string>dataUrl;
            })
    }

    get filterIndexImages() {
        const fo = new IgxFilterOptions();
        fo.key = "title";
        fo.inputValue = this.searchIndex;
        return fo;
    }

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: "100ms",
                toPosition: "translateX(25px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: "500ms",
                fromPosition: "translateX(-15px)",
                startOpacity: 0.1
            }
        })
    };
}