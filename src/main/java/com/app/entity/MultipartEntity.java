package com.app.entity;


import javax.persistence.*;

@Entity
@Table(name="image_model")
public class MultipartEntity {
	
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Lob
    @Column(name = "pic")
    private byte[] pic;

//Custom Construtor
    public MultipartEntity(String name, String type, byte[] pic) {
        this.name = name;
        this.type = type;
        this.pic = pic;
    }
}
